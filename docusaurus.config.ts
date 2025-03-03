import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "EasyButton",
  tagline:
    "Arduino library for debouncing momentary contact switches, detect press, release, long press and sequences with event definitions and callbacks.",

  // Set the production url of your site here
  url: "https://evert-arias.github.io",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/easybtn-docs",

  favicon: "img/favicon.ico",
  organizationName: "evert-arias",
  projectName: "EasyButton",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/evert-arias/easybutton-website",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "UA-137998950-8",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.svg",
    navbar: {
      title: "EasyButton",
      logo: {
        alt: "EasyButton Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/introduction",
          sidebarId: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/on-single-press-api",
          sidebarId: "api",
          label: "API",
          position: "left",
        },
        {
          to: "docs/on-single-press-example",
          sidebarId: "examples",
          label: "Examples",
          position: "left",
        },
        { to: "/contributors", label: "Contributors", position: "left" },
        { to: "https://blog.treve.dev", label: "Blog", position: "right" },
        {
          href: "https://github.com/evert-arias/EasyButton",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction",
            },
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "Fundamentals",
              to: "docs/fundamentals",
            },
          ],
        },
        {
          title: "Examples",
          items: [
            {
              label: "Single Press",
              to: "docs/on-single-press-example",
            },
            {
              label: "Detecting Sequence",
              to: "docs/on-sequence-example",
            },
            {
              label: "Pressed For Duration",
              to: "docs/on-pressed-for-duration-example",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "https://blog.treve.dev/",
            },
            {
              label: "GitHub",
              href: "https://github.com/evert-arias/EasyButton",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@trevedev",
            },
          ],
        },
      ],
      copyright: `Made with 💙 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/evert-arias">Evert Arias</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
