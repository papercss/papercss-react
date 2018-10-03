import React from "react";

import { HTMLAttributes, Omit } from "../common/types";
import { classNames, ElementKind, kindToClass } from "../utils";

import styles from "./index.scss";

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
  type?: ElementKind;
} & Omit<HTMLAttributes<HTMLButtonElement>, "size">;

class Button extends React.Component<ButtonProps> {
  public render() {
    const { size, type, className, children, ...rest } = this.props;

    const sizeClass = sizeToClass(size);
    const typeClass = kindToClass(styles, type);

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
