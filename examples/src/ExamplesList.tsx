import React from "react";
import { borderStyles, Typography } from "react-paper-css";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import * as docs from "./docs";
import Example from "./Example";
import { H3, H4 } from "./Headings";

const Section = styled.section`
  height: 100%;
  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: 1fr 3fr 0;
  }
  @media (max-width: 419px) {
    /* TODO: reveal nav button visible here */
    & > nav {
      display: none;
      z-index: 99;
      background: white;
      height: 100%;
      margin-left: -8px;
      margin-top: -8px;
      padding: 8px;
      float: left;
      position: fixed;
    }
  }
`;

const About = () => (
  <section>
    <ul>
      <li>Ready for the component age!</li>
      <li>No global styles</li>
      <li>Easy to enhance and compose</li>
      <li>Pretty pretty</li>
    </ul>
  </section>
);

const examples = Object.entries(docs.examples);

const links = examples.map(([name]) => (
  <div key={name}>
    <Link to={`/${name}`}>{name}</Link>
  </div>
));

const pages = examples.map(([name, source]) => {
  const Info = docs.documentationComponents[name];
  return () => (
    <Example name={name} source={source}>
      {Info && <Info />}
    </Example>
  );
});

const routes = examples.map(([name], index) => (
  <Route path={`/${name}`} component={pages[index]} key={name} />
));

console.table(borderStyles);

const Nav = styled((props: React.AllHTMLAttributes<HTMLDivElement>) => (
  <Typography {...props} as="nav" />
))`
  min-width: 120px;

  max-width: 240px;
  background: white;
  -webkit-box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`; // TODO: use classname .shadow

export default class ExamplesList extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <H3>PaperCSS React</H3>
          <Link to="/">About</Link>
          <H4>Components</H4>
          {links}
        </Nav>
        <article
          style={{
            height: "100%",
            maxWidth: "1000px",
            minWidth: "370px",
          }}
        >
          <Route exact path="/" component={About} />
          {routes}
        </article>
      </Section>
    );
  }
}
