import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="page-title-logo" src={`${baseDir}/static/logo.png`} alt={title} />
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  font-family: var(--titleFont);
}
.page-title a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.page-title-logo {
  width: 100%;
  max-width: 170px;
  height: auto;
  display: block;
}
.page-title-text {
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  color: var(--secondary);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
