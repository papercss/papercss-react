import React from "react";
import {
  borderStyles,
  classNames,
  Heading,
  PaperTypography,
} from "react-paper-css";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import * as docs from "./docs";
import Editors from "./Editors";
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
  <PaperTypography as="nav" {...props} />
))`
  min-width: 120px;
`;

const H4 = styled.h4`
  margin: 5px 0 8px 0;
  user-select: none;
`;

const H3 = styled.h3`
  margin: 0 0 12px 0;
  user-select: none;
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
