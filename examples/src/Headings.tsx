import React, { Ref } from "react";
import styled from "react-emotion";
import { Heading, HeadingProps, Omit } from "react-paper-css";

type Props = Omit<HeadingProps, "as" | "ref">;

export const H4 = styled((props: Props) => <Heading {...props} as="h4" />)`
  margin: 5px 0 8px 0;
  user-select: none;
`;

export const H3 = styled((props: Props) => <Heading {...props} as="h3" />)`
  margin: 0 0 12px 0;
  user-select: none;
`;
