import React from "react";

import classNames from "../utils/classNames";

import styles from "./index.scss";

type Size = "large" | "small";

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
} & React.AllHTMLAttributes<HTMLButtonElement>;

class Button extends React.Component<ButtonProps> {
  public render() {
    const { size, className, children, ...rest } = this.props;

    const sizeClass = sizeToClass(size);

    return (
      <button
        className={classNames(styles.button, sizeClass, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
