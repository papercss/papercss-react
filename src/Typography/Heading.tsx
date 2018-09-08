import React from "react";

import { HTMLAttributes } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  as: HeadingType;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
class Heading extends React.Component<HeadingProps> {
  public static defaultProps: Pick<HeadingProps, "as"> = {
    as: "h1",
  };
  public render() {
    const { as, className, ...props } = this.props;
    const ElementType = as;
    return (
      <ElementType className={classNames(styles.heading, className)} {...props}>
        {this.props.children}
      </ElementType>
    );
  }
}

export default Heading;
