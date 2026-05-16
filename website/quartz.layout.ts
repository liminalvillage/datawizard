import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Explorer ordering: root-level standalone docs first (Introduction,
// Constellation Overview, General Terms, Cheatsheet), then the
// Agreements / Annexes / Companion Docs folders. Within a folder,
// items are ranked by agreement number.
// NOTE: sortFn is serialized (.toString) and re-run in the browser via
// `new Function`, so it must be fully self-contained AND must not contain
// any inner named function — esbuild's keepNames would inject a `__name`
// helper that is undefined in that scope. Everything is inlined for a/b.
const explorerOptions = {
  sortFn: (a: any, b: any) => {
    const sa = a.isFolder ? "" : a.displayName.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
    const sb = b.isFolder ? "" : b.displayName.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
    const ma = sa.match(/agreement (\d+)/)
    const mb = sb.match(/agreement (\d+)/)
    let ra: number
    if (a.isFolder) ra = 9000
    else if (sa.includes("introduction")) ra = 0
    else if (sa.includes("constellation overview")) ra = 1
    else if (ma) ra = 100 + parseInt(ma[1], 10) + (sa.includes("annex") ? 0.5 : 0)
    else if (sa.includes("general terms")) ra = 800
    else if (sa.includes("cheatsheet")) ra = 850
    else ra = 500
    let rb: number
    if (b.isFolder) rb = 9000
    else if (sb.includes("introduction")) rb = 0
    else if (sb.includes("constellation overview")) rb = 1
    else if (mb) rb = 100 + parseInt(mb[1], 10) + (sb.includes("annex") ? 0.5 : 0)
    else if (sb.includes("general terms")) rb = 800
    else if (sb.includes("cheatsheet")) rb = 850
    else rb = 500
    if (ra !== rb) return ra - rb
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}
