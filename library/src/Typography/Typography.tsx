import React from "react";

import { HTMLAttributes } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

export type TypographyProps = {
  as: keyof React.ReactHTML;
} & HTMLAttributes<HTMLDivElement>;

class Typography extends React.Component<TypographyProps> {
  public static defaultProps: Pick<TypographyProps, "as"> = {
    as: "div",
  };
  public render() {
    const { as, className, ...props } = this.props;
    const ElementType = as;
    return (
      <ElementType
        className={classNames(styles.typography, className)}
        {...props}
      >
        {this.props.children}
      </ElementType>
    );
  }
}

export default Typography;
