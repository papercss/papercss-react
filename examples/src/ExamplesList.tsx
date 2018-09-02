import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

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

const examples = Object.entries(examplesBarrel).slice(1);

const allExampleLinks = examples.map(([name]) => (
  <Link to={`/${name}`}>{name}</Link>
));

const allExampleRoutes = examples.map(([name, component]) => (
  <Route path={`/${name}`} component={component} key={name} />
));

export default class ExamplesList extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <Link to="/">About</Link>
          {allExampleLinks}
        </Nav>
        <Route exact path="/" component={About} />
        {allExampleRoutes}
      </Section>
    );
  }
}
