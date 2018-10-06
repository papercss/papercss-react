import React from "react";

import { classNames, ElementKind, kindToClass } from "../utils";

import styles from "./index.css";

export type Props = {
  as: keyof React.ReactHTML;
  type?: ElementKind;
} & React.AllHTMLAttributes<HTMLElement>;

class Badge extends React.Component<Props> {
  public static defaultProps = {
    as: "div",
  };
  public render() {
    const { type, as, className, children, ...rest } = this.props;

    const badgeClass = kindToClass(styles, type);
    const ElementType = as;
    return (
      <ElementType
        className={classNames(styles.badge, badgeClass, className)}
        {...rest}
      >
        {children}
      </ElementType>
    );
  }
}

export default Badge;
