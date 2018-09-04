import React from "react";
import { PaperTypography } from "react-paper-css";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import * as docs from "./docs";
import Editors from "./Editors";
const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

const About = () => <div>"About"</div>;

const examples = Object.entries(docs.examples);

const links = examples.map(([name]) => (
  <div key={name}>
    <Link to={`/${name}`}>{name.replace("Paper", "")}</Link>
  </div>
));
const pages = examples.map(([name, source]) => {
  const Info = docs.documentationComponents[name];
  return () => (
    <section
      style={{
        flex: 1,
      }}
    >
      <h1>{name}</h1>
      {Info && <Info />}
      <Editors name={name} initialSource={source} />
    </section>
  );
});

const routes = examples.map(([name], index) => (
  <Route path={`/${name}`} component={pages[index]} key={name} />
));

const Nav = styled((props: React.AllHTMLAttributes<HTMLDivElement>) => (
  <PaperTypography as="nav" {...props} />
))`
  width: 120px;
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
        <Route exact path="/" component={About} />
        {routes}
      </Section>
    );
  }
}
