import React from "react";
import { Typography } from "react-paper-css";
import RoughReactLogo from "react-rough-logo";

const roughOptions = {
  stroke: "#41403e",
  strokeWidth: 4,
};

const About = () => (
  <Typography as="section">
    <header
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <RoughReactLogo
        ellipsesOptions={{
          ...roughOptions,
          roughness: 1.6,
        }}
        circleOptions={roughOptions}
        style={{
          marginRight: "10px",
          width: "150px",
        }}
        viewBox="-100 -100 200 200"
        shapeRendering="geometricprecision"
        scale={0.3}
      />
      <h1
        style={{
          margin: 0,
        }}
      >
        PaperCSS React
      </h1>
    </header>
    <p>The Less Formal CSS Framework adapted for use with React.</p>
    <ul>
      <li>Ready for the component age!</li>
      <li>Only scoped styles</li>
      <li>Easy to enhance and compose</li>
      <li>Written in TypeScript</li>
    </ul>
    <section>
      <h2>Differences to PaperCSS</h2>
      <p>
        Let me quote the original PaperCSS{" "}
        <a href="https://www.getpapercss.com/about/">about page</a>:
      </p>
      <blockquote>
        The goal of PaperCSS is to be as minimal as possible when adding
        classes. For example, a button should just look like a paper button.
        There shouldn’t be a need to add a class such as{" "}
        <code>paper-button</code>. Because of this, adding PaperCSS to a
        markdown generated page should instantly paper-ize it.
      </blockquote>
      <p>
        This may not be the best thing when you want to build an app quickly. If
        you want to use Comic Sans in place of default font with a CSS framework
        you can either fork it or override each selector that sets the font,
        what is not fun.
      </p>
      <p>
        In PaperCSS React, you get only what you ask for. Need only a button?
        Great, just <code>{"import { Button }"}</code> and you have it.
      </p>
    </section>
  </Typography>
);

export default About;
