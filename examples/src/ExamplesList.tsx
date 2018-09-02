import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import Example from "./Example";
import * as examplesBarrel from "./examples";

const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

const About = () => <div>"About"</div>;

console.log(examplesBarrel);

const examples = Object.entries(examplesBarrel);
delete examples.__esModule;

const exampleLinks = examples.map(([name]) => (
  <Link to={`/${name}`}>{name}</Link>
));

const exampleComponents = examples.map(([name, source]) => () => (
  <Example name={name} initialSource={source} />
));

const exampleRoutes = examples.map(([name], index) => (
  <Route path={`/${name}`} component={exampleComponents[index]} key={name} />
));

export default class ExamplesList extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <Link to="/">About</Link>
          {exampleLinks}
        </Nav>
        <Route exact path="/" component={About} />
        {exampleRoutes}
      </Section>
    );
  }
}
