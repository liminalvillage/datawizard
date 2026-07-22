import { marked } from "marked"
import DOMPurify from "dompurify"

type ChatMessage = { role: "user" | "assistant"; content: string; error?: boolean }

// Module-scope state survives micromorph (SPA) navigations; the DOM is
// re-rendered from it on every `nav` event.
let history: ChatMessage[] = []
let panelOpen = false
let streaming = false
let abortController: AbortController | null = null

const MAX_HISTORY_MESSAGES = 12
const RENDER_INTERVAL_MS = 100

function renderMarkdown(text: string): string {
  return DOMPurify.sanitize(marked.parse(text, { async: false }) as string)
}

// Query the DOM fresh on every render so mid-stream navigations (which swap
// the page body, including the widget) keep updating the new elements.
function render() {
  const messagesEl = document.querySelector<HTMLElement>(".chat-messages")
  if (!messagesEl) return
  messagesEl.replaceChildren()
  if (history.length === 0) {
    const intro = document.createElement("div")
    intro.className = "chat-message assistant"
    intro.textContent = "Hi! Ask me anything about the ReGenerativa agreements — in any language."
    messagesEl.appendChild(intro)
  }
  for (const msg of history) {
    const el = document.createElement("div")
    el.className = `chat-message ${msg.role}${msg.error ? " error" : ""}`
    if (msg.role === "assistant" && !msg.error) {
      el.innerHTML = renderMarkdown(msg.content)
      if (msg.content === "" && streaming && msg === history[history.length - 1]) {
        el.classList.add("thinking")
        el.textContent = "…"
      }
    } else {
      el.textContent = msg.content
    }
    messagesEl.appendChild(el)
  }
  messagesEl.scrollTop = messagesEl.scrollHeight
}

let lastRender = 0
function throttledRender() {
  const now = Date.now()
  if (now - lastRender >= RENDER_INTERVAL_MS) {
    lastRender = now
    render()
  }
}

function setBusy(busy: boolean) {
  streaming = busy
  const send = document.querySelector<HTMLButtonElement>(".chat-send")
  if (send) {
    send.disabled = busy
    send.textContent = busy ? "…" : "Send"
  }
}

async function ask(question: string) {
  // History sent to the server: prior completed exchanges only (no errors,
  // not the question being asked now). The server trims again regardless.
  const prior = history
    .filter((m) => !m.error && m.content !== "")
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content }))

  history.push({ role: "user", content: question })
  const assistant: ChatMessage = { role: "assistant", content: "" }
  history.push(assistant)
  setBusy(true)
  render()

  abortController = new AbortController()
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, history: prior }),
      signal: abortController.signal,
    })
    if (!res.ok || !res.body) {
      const err = await res.json().catch(() => null)
      assistant.content = err?.error ?? "Something went wrong — please try again in a moment."
      assistant.error = true
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      let sep: number
      while ((sep = buffer.indexOf("\n\n")) !== -1) {
        const rawEvent = buffer.slice(0, sep)
        buffer = buffer.slice(sep + 2)
        let event = ""
        let data = ""
        for (const line of rawEvent.split("\n")) {
          if (line.startsWith("event: ")) event = line.slice(7)
          else if (line.startsWith("data: ")) data = line.slice(6)
        }
        if (event === "delta") {
          try {
            assistant.content += JSON.parse(data).text ?? ""
          } catch {
            // skip malformed frame
          }
        } else if (event === "error") {
          // keep any partial answer already streamed; otherwise show the error
          if (assistant.content === "") {
            assistant.content = "The assistant hit a problem — please try again."
            assistant.error = true
          }
        }
      }
      throttledRender()
    }
    if (assistant.content === "") {
      assistant.content = "The assistant returned no answer — please try again."
      assistant.error = true
    }
  } catch (err) {
    if ((err as Error).name !== "AbortError") {
      assistant.content = "Could not reach the assistant — please try again."
      assistant.error = true
    } else if (assistant.content === "") {
      // aborted before any text arrived: drop the empty exchange
      history = history.filter((m) => m !== assistant && m.content !== question)
    }
  } finally {
    abortController = null
    setBusy(false)
    render()
  }
}

function setPanelOpen(open: boolean) {
  panelOpen = open
  const panel = document.querySelector<HTMLElement>(".chat-panel")
  if (panel) panel.hidden = !open
  if (open) {
    render()
    document.querySelector<HTMLTextAreaElement>(".chat-input")?.focus()
  }
}

document.addEventListener("nav", () => {
  const widget = document.querySelector<HTMLElement>(".chat-widget")
  if (!widget) return

  const toggle = widget.querySelector<HTMLButtonElement>(".chat-toggle")
  const close = widget.querySelector<HTMLButtonElement>(".chat-close")
  const clear = widget.querySelector<HTMLButtonElement>(".chat-clear")
  const form = widget.querySelector<HTMLFormElement>(".chat-form")
  const input = widget.querySelector<HTMLTextAreaElement>(".chat-input")
  const hint = widget.querySelector<HTMLElement>(".chat-hint")

  // First-visit hint: point new visitors at the button until they use it once.
  const hintDismissed = () => localStorage.getItem("chat-hint-dismissed") === "true"
  const dismissHint = () => {
    localStorage.setItem("chat-hint-dismissed", "true")
    if (hint) hint.hidden = true
  }
  if (hint) hint.hidden = hintDismissed() || panelOpen
  const onHintClick = () => {
    dismissHint()
    setPanelOpen(true)
  }

  const onToggle = () => {
    dismissHint()
    setPanelOpen(!panelOpen)
  }
  const onClose = () => setPanelOpen(false)
  const onClear = () => {
    abortController?.abort()
    history = []
    render()
  }
  const onSubmit = (e: Event) => {
    e.preventDefault()
    if (streaming || !input) return
    const question = input.value.trim()
    if (question === "") return
    input.value = ""
    void ask(question)
  }
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      form?.requestSubmit()
    }
  }
  const onEsc = (e: KeyboardEvent) => {
    if (e.key.startsWith("Esc") && panelOpen) setPanelOpen(false)
  }

  toggle?.addEventListener("click", onToggle)
  close?.addEventListener("click", onClose)
  clear?.addEventListener("click", onClear)
  form?.addEventListener("submit", onSubmit)
  input?.addEventListener("keydown", onKeydown)
  hint?.addEventListener("click", onHintClick)
  document.addEventListener("keydown", onEsc)
  window.addCleanup(() => {
    toggle?.removeEventListener("click", onToggle)
    close?.removeEventListener("click", onClose)
    clear?.removeEventListener("click", onClear)
    form?.removeEventListener("submit", onSubmit)
    input?.removeEventListener("keydown", onKeydown)
    hint?.removeEventListener("click", onHintClick)
    document.removeEventListener("keydown", onEsc)
  })

  // Restore state after the SPA swapped the DOM.
  setBusy(streaming)
  setPanelOpen(panelOpen)
  render()
})
