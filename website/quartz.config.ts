import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ReGenerativa - Constellation of Agreements",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    // Netlify sets URL to the site's primary address at build time.
    baseUrl: process.env.URL?.replace(/^https?:\/\//, "") ?? "regenerativa.netlify.app",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "0.0 *",
      "0.1 *",
      "0.2 *",
      "0.3 *",
      "_DataWizard",
      "CLAUDE.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      // ReGenerativa brand: green and white (emerald accents from regenerativa.earth).
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e4ede7",
          gray: "#8aa597",
          darkgray: "#2a3b33",
          dark: "#13251c",
          secondary: "#059669",
          tertiary: "#00bb7f",
          highlight: "rgba(5, 150, 105, 0.10)",
          textHighlight: "#bbf7d0aa",
        },
        darkMode: {
          light: "#0d1712",
          lightgray: "#22362c",
          gray: "#5b7b69",
          darkgray: "#cfe3d7",
          dark: "#eef6f1",
          secondary: "#34d399",
          tertiary: "#6ee7b7",
          highlight: "rgba(52, 211, 153, 0.12)",
          textHighlight: "#34d39966",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages omitted to keep the first-deploy build fast and robust.
    ],
  },
}

export default config
