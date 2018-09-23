import React from "react";
import { Heading, HeadingProps, Omit } from "react-paper-css";
import styled from "styled-components";
export const H4 = styled((props: Omit<HeadingProps, "as">) => (
  <Heading {...props} as="h4" />
))`
  margin: 5px 0 8px 0;
  user-select: none;
`;

export const H3 = styled((props: Omit<HeadingProps, "as">) => (
  <Heading {...props} as="h3" />
))`
  margin: 0 0 12px 0;
  user-select: none;
`;
