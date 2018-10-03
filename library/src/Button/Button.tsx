import React from "react";

import { HTMLAttributes, Omit } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./index.scss";

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

export type Size = "large" | "small";

function sizeToClass(size: string | undefined): string {
  switch (size) {
    case "large":
      return styles.large;
    case "small":
      return styles.small;
    default:
      return "";
  }
}

export type ButtonProps = {
  size?: Size;
  type?: Type;
} & Omit<HTMLAttributes<HTMLButtonElement>, "size">;

class Button extends React.Component<ButtonProps> {
  public render() {
    const { size, type, className, children, ...rest } = this.props;

    const sizeClass = sizeToClass(size);
    const typeClass = typeToClass(type);

    return (
      <button
        className={classNames(styles.button, sizeClass, typeClass, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
