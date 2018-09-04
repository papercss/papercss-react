import React from "react";
import PaperTypography from "react-paper-css";
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
  <Link to={`/${name}`} key={name}>
    {name}
  </Link>
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
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export default class ExamplesList extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <Link to="/">About</Link>
          {links}
        </Nav>
        <Route exact path="/" component={About} />
        {routes}
      </Section>
    );
  }
}
