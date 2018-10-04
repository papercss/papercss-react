import React from "react";
import styled, { css, cx } from "react-emotion";
import { Heading, HeadingProps, Omit } from "react-paper-css";

type Props = Omit<HeadingProps, "as" | "ref">;

const smallMargin = css`
  margin: 0 0 12px 0;
`;

const noSelect = css`
  user-select: none;
`;

export const DocumentationHeading = (props: Props) => (
  <Heading {...props} className={cx(props.className, smallMargin)} />
);

export const H4 = styled((props: Props) => (
  <Heading {...props} as="h4" className={cx(props.className, noSelect)} />
))`
  margin: 5px 0 8px 0;
`;

export const H3 = (props: Props) => (
  <Heading
    {...props}
    as="h3"
    className={cx(props.className, smallMargin, noSelect)}
  />
);
