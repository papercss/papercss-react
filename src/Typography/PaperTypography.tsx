import React from "react";

import { HTMLAttributes } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

type Props = {
  as: keyof React.ReactHTML;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
class PaperTypography extends React.Component<Props> {
  public static defaultProps: Pick<Props, "as"> = {
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

export default PaperTypography;
