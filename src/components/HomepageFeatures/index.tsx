import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Intuitive API",
    Svg: require("@site/static/img/feature-intuitive-api.svg").default,
    description: (
      <>
        Handling buttons is a simple task on arduino, but the code can look very
        ugly, full of conditions and delays that are not safe at all. EasyButton
        not only saves you development time, it also provides an easy and
        intuitive API for handling buttons with callbacks.
        <div className={styles.featureButtomLink}>
          <Link to="docs/on-single-press-api">API documentation</Link>
        </div>
      </>
    ),
  },
  {
    title: "Non-blocking",
    Svg: require("@site/static/img/feature-non-blocking.svg").default,
    description: (
      <>
        EasyButton is a non-blocking library, which means it won't affect the
        rest of your code with dangerous delays that impact the overall
        performance of your code.
      </>
    ),
  },
  {
    title: "Interrupts support",
    Svg: require("@site/static/img/feature-interrupts-support.svg").default,
    description: (
      <>
        In order to improve efficiency, the library is able to interface buttons
        through external interrupts. By doing this, it won't be necessary to
        continuously read the state of the buttons. This allows you to write a
        more efficient code.
        <div className={styles.featureButtomLink}>
          <Link to="docs/poll-vs-external-interrupts">
            More on external interrupts
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "Small footprint",
    Svg: require("@site/static/img/feature-small-footprint.svg").default,
    description: (
      <>
        EasyButton has a small footprint and does not depend on third party
        libraries, making it very easy to install and include in your project.
      </>
    ),
  },
  {
    title: "Well documented",
    Svg: require("@site/static/img/feature-well-documented.svg").default,
    description: (
      <>
        EasyButton has a step-by-step guide that lets you get started with the
        library in just a few minutes. Its API is well documented with a
        complete but easy to understand explanation.
        <div className={styles.featureButtomLink}>
          <Link to="docs/introduction">Getting started</Link>
        </div>
      </>
    ),
  },
  {
    title: "Packed with examples",
    Svg: require("@site/static/img/feature-packed-with-examples.svg").default,
    description: (
      <>
        Okay! EasyButton its well documented, but we are all used to having
        examples in Arduino libraries and we always learn a lot from them,
        that's why EasyButton provides several fully functional examples and we
        will continue to add more. <br />
        <div className={styles.featureButtomLink}>
          <Link to="docs/on-single-press-example">Check them out!</Link>
        </div>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
