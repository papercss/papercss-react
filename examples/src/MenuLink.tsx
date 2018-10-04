import { css } from "emotion";
import React from "react";
import { NavLink, NavLinkProps, Route } from "react-router-dom";

const active = css`
  color: red;
  &:before {
    content: ">";
  }
`;

export const MenuLink = ({ to, ...rest }: NavLinkProps & { to: string }) => (
  <Route path={to}>
    {({ match }) =>
      match ? (
        <li className={active}>
          <NavLink to={to} {...rest} />
        </li>
      ) : (
        <li>
          <NavLink to={to} {...rest} />
        </li>
      )
    }
  </Route>
);
