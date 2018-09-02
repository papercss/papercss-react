import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

import PaperButtonExample from "./PaperButtonExample";

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

export default class Examples extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <Link to="/">About</Link>
          <Link to="/button">Button</Link>
        </Nav>
        <Route exact path="/" component={About} />
        <Route path="/button" component={PaperButtonExample} />
      </Section>
    );
  }
}
