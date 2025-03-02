import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "introduction",
        "installation",
        "poll-vs-external-interrupts",
        "fundamentals",
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "API",
      items: [
        "on-single-press-api",
        "on-pressed-for-api",
        "on-sequence-api",
        "is-pressed-api",
        "is-released-api",
        "was-pressed-api",
        "was-released-api",
        "pressed-for-api",
        "released-for-api",
      ],
    },
  ],
  examples: [
    {
      type: "category",
      label: "Examples",
      items: [
        "on-single-press-example",
        "on-pressed-for-duration-example",
        "on-sequence-example",
      ],
    },
  ],
};

export default sidebars;
