import React from "react";
import styled from "react-emotion";
import { borderStyles, List, ListProps, Typography } from "react-paper-css";
// tslint:disable-next-line:no-submodule-imports
import "react-rough-logo/build/index.css";
import { NavLink, NavLinkProps, Route } from "react-router-dom";

import About from "./About";
import * as _docs from "./docs";
import { H3, H4 } from "./Headings";
import SmallReactLogo from "./SmallReactLogo";

const docs: Record<string, React.ComponentType> = { ..._docs };
delete docs.__esModule;

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

const docsKeys = Object.keys(docs);

const LinksSection = (props: ListProps) => (
  <List
    style={{
      margin: 0,
      paddingLeft: "18px",
    }}
    {...props}
  />
);

const MenuLink = (props: NavLinkProps) => (
  <li>
    <NavLink {...props} />
  </li>
);

const links = docsKeys.map(name => (
  <MenuLink key={name} to={`/${name}`}>
    {name}
  </MenuLink>
));

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

export default class Pages extends React.Component {
  public render() {
    return (
      <Section>
        <Nav>
          <H3
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <SmallReactLogo />
            PaperCSS React
          </H3>
          <LinksSection>
            <MenuLink to="/">About</MenuLink>
          </LinksSection>
          <H4>Components</H4>
          <LinksSection>{links}</LinksSection>
        </Nav>
        <article
          style={{
            height: "100%",
            margin: "0 8px 0 8px",
            maxWidth: "1000px",
            minWidth: "370px",
          }}
        >
          <Route exact path="/" component={About} />
          {docsKeys.map(name => (
            <Route path={`/${name}`} component={docs[name]} key={name} />
          ))}
        </article>
      </Section>
    );
  }
}
