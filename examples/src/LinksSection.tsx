import React from "react";
import { List, ListProps } from "react-paper-css";

export const LinksSection = (props: ListProps) => (
  <List
    style={{
      margin: 0,
      paddingLeft: "18px",
    }}
    {...props}
  />
);
