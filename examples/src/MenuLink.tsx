import { css } from "emotion";
import React from "react";
import { NavLink, NavLinkProps, Route } from "react-router-dom";

const active = css`
  &:before {
    content: "+" !important; /* fixme? */
  }
`;

export const MenuLink = ({ to, ...rest }: NavLinkProps & { to: string }) => (
  <Route path={to} exact>
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
