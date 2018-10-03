import React from "react";

import classNames from "../utils/classNames";

import styles from "./index.css";

export type Type = "primary" | "secondary" | "success" | "warning" | "danger";

export function typeToClass(size: Type | undefined): string {
  switch (size) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    case "success":
      return styles.success;
    case "warning":
      return styles.warning;
    case "danger":
      return styles.danger;
    default:
      return "";
  }
}

export type Props = {
  as: keyof React.ReactHTML;
  type?: Type;
} & React.AllHTMLAttributes<HTMLElement>;

class Badge extends React.Component<Props> {
  public static defaultProps = {
    as: "div",
  };
  public render() {
    const { type, as, className, children, ...rest } = this.props;

    const badgeClass = typeToClass(type);
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
