import { css } from "emotion";
import React from "react";
import { Omit } from "react-paper-css";
import { NavLink, NavLinkProps, Route } from "react-router-dom";

const active = css`
  &:before {
    content: "+" !important; /* fixme? */
  }
`;

type MenuLinkProps = Omit<NavLinkProps, "to"> & { to?: string };
type InternalLinkProps = NavLinkProps & { to: string };

const InternalLink = (props: InternalLinkProps) => (
  <Route path={props.to} exact>
    {({ match }) => (
      <li className={match ? active : ""}>
        <NavLink {...props} />
      </li>
    )}
  </Route>
);

const ExternalLink = (props: MenuLinkProps) => (
  <li>
    <a {...props} />
  </li>
);

export const MenuLink = (props: MenuLinkProps) =>
  props.to ? (
    <InternalLink {...props as InternalLinkProps} />
  ) : (
    <ExternalLink {...props} />
  );
