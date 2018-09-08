import React from "react";
import { Heading, HeadingType } from "react-paper-css";
import styled from "styled-components";
export const H4 = styled(
  (props: React.AllHTMLAttributes<HTMLHeadingElement>) => (
    <Heading as={HeadingType.H4} {...props} />
  )
)`
  margin: 5px 0 8px 0;
  user-select: none;
`;

export const H3 = styled(
  (props: React.AllHTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h4" {...props} />
  )
)`
  margin: 0 0 12px 0;
  user-select: none;
`;
