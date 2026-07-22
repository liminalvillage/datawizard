import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/chat.scss"
// @ts-ignore
import script from "./scripts/chat.inline"

export default (() => {
  const ChatWidget: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="chat-widget">
        <button
          class="chat-toggle"
          aria-label="Ask about the agreements"
          title="Ask about the agreements"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>Ask about the agreements</title>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <div class="chat-panel" hidden>
          <div class="chat-header">
            <span class="chat-title">Ask about the agreements</span>
            <button class="chat-clear" type="button" title="Start a new conversation">
              Clear
            </button>
            <button class="chat-close" type="button" aria-label="Close">
              ×
            </button>
          </div>
          <div class="chat-messages" role="log" aria-live="polite"></div>
          <form class="chat-form">
            <textarea
              class="chat-input"
              rows={2}
              maxLength={2000}
              placeholder="Ask a question about the agreements…"
              aria-label="Your question about the agreements"
            ></textarea>
            <button type="submit" class="chat-send">
              Send
            </button>
          </form>
          <p class="chat-disclaimer">
            AI-generated answers — the published documents remain the binding text.
          </p>
        </div>
      </div>
    )
  }

  ChatWidget.afterDOMLoaded = script
  ChatWidget.css = style

  return ChatWidget
}) satisfies QuartzComponentConstructor
