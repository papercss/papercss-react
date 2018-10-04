import { css } from "emotion";
import React from "react";
import { NavLink, NavLinkProps, Route } from "react-router-dom";

const active = css`
  &:before {
    content: "+" !important; /* fixme? */
  }
`;

export const MenuLink = (props: NavLinkProps & { to: string }) => (
  <Route path={props.to} exact>
    {({ match }) => (
      <li className={match ? active : ""}>
        <NavLink {...props} />
      </li>
    )}
  </Route>
);
