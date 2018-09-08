import React from 'react';

import classNames from '../utils/classNames';

import styles from './index.css';

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

type Size = 'large' | 'small';

function sizeToClass(size: string | undefined): string {
  switch (size) {
    case 'large':
      return styles.large;
    case 'small':
      return styles.small;
    default:
      return '';
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ButtonProps = {
  size?: Size;
  type?: Type;
} & Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'size'>;

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
