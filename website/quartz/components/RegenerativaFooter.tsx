import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

export default (() => {
  const RegenerativaFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} ReGenerativa APS — ETS · The constellation model is released as a knowledge
          commons under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
            CC BY-SA 4.0
          </a>{" "}
          · <a href="/license">License</a>
        </p>
        <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
      </footer>
    )
  }

  RegenerativaFooter.css = style
  return RegenerativaFooter
}) satisfies QuartzComponentConstructor
