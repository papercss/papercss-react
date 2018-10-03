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
    <ul>
      <li>Ready for the component age!</li>
      <li>Only scoped styles</li>
      <li>Easy to enhance and compose</li>
    </ul>
  </Typography>
);

export default About;
