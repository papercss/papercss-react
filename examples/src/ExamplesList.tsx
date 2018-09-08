import React from "react";
import { borderStyles, Heading, PaperTypography } from "react-paper-css";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import * as docs from "./docs";
import Editors from "./Editors";
import { H3, H4 } from "./Headings";
const Section = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 0;
  column-gap: 0;
`;

const About = () => <div>"About"</div>;

const examples = Object.entries(docs.examples);

const links = examples.map(([name]) => (
  <div key={name}>
    <Link to={`/${name}`}>{name}</Link>
  </div>
));
const pages = examples.map(([name, source]) => {
  const Info = docs.documentationComponents[name];
  return () => (
    <section>
      <Heading as="h3">{name}</Heading>
      {Info && <Info />}
      <Editors initialSource={source} />
    </section>
  );
});

const routes = examples.map(([name], index) => (
  <Route path={`/${name}`} component={pages[index]} key={name} />
));

console.table(borderStyles);

const Nav = styled((props: React.AllHTMLAttributes<HTMLDivElement>) => (
  <PaperTypography {...props} as="nav" />
))`
  min-width: 120px;
`;

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
          }}
        >
          <Route exact path="/" component={About} />
          {routes}
        </article>
      </Section>
    );
  }
}
