import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import GitHubButton from "react-github-btn";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="padding-vert--md">
          <GitHubButton
            href="https://github.com/evert-arias/EasyButton"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star evert-arias/EasyButton on GitHub"
          >
            GitHub
          </GitHubButton>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            Getting started
          </Link>
        </div>
        <div className="padding-vert--md">
          <Link
            className="button button--danger button--lg"
            to="https://github.com/evert-arias/EasyButton/archive/v2.0.3.zip"
          >
            Download v2.0.3
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
