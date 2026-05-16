import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Explicit reading order in the Explorer sidebar:
// Introduction -> Constellation Overview -> Agreements 1..8 ->
// General Terms -> Cheatsheet -> folders (Annexes, Companion Docs).
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
    const ra = a.isFolder
      ? 9000
      : sa.includes("introduction")
        ? 0
        : sa.includes("constellation overview")
          ? 1
          : ma
            ? 100 + parseInt(ma[1], 10)
            : sa.includes("general terms")
              ? 800
              : sa.includes("cheatsheet")
                ? 850
                : 500
    const rb = b.isFolder
      ? 9000
      : sb.includes("introduction")
        ? 0
        : sb.includes("constellation overview")
          ? 1
          : mb
            ? 100 + parseInt(mb[1], 10)
            : sb.includes("general terms")
              ? 800
              : sb.includes("cheatsheet")
                ? 850
                : 500
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
