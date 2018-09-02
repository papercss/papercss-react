import React, { ReactNode } from 'react';

import classNames from '../utils/classNames';

import styles from './index.css';

type Size = 'large' | 'small';

function sizeToClass(size: Size): string;
function sizeToClass(size: Exclude<string, Size> | undefined): '';
function sizeToClass(size: string | undefined) {
  switch (size) {
    case 'large':
      return styles.large;
    case 'small':
      return styles.small;
    default:
      return '';
  }
}

export type Props = {
  size?: Size;
  buttonType?: string; // deprecate?
  buttonText?: ReactNode; // deprecate or rename to 'text'?
} & React.AllHTMLAttributes<HTMLButtonElement>;

class PaperButton extends React.Component<Props> {
  public render() {
    const { size, buttonType, className, children, ...rest } = this.props;

    const sizeClass = sizeToClass(buttonType ? buttonType.toLowerCase() : size);

    return (
      <button
        className={classNames(styles.paperButton, sizeClass, className)}
        {...rest}
      >
        {this.props.buttonText || children}
      </button>
    );
  }
}

export default PaperButton;
