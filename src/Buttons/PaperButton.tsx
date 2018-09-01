import React, { ReactNode } from 'react';

import classNames from '../utils/classNames';

import styles from './index.css';

type Size = 'large' | 'small';

function sizeToClass(size: Size) {
  switch (size) {
    case 'large':
      return styles.Large;
    case 'small':
      return styles.Small;
    default:
      return '';
  }
}

export type Props = {
  size: Size;
  buttonType: Size; // deprecate?
  buttonText: ReactNode; // deprecate?
} & React.AllHTMLAttributes<HTMLButtonElement>;

class PaperButton extends React.Component<Props> {
  public render() {
    const { size, buttonType, className, children, ...rest } = this.props;

    const sizeClass = sizeToClass(buttonType || size);

    return (
      <button
        className={classNames(styles.PaperButton, sizeClass, className)}
        {...rest}
      >
        {this.props.buttonText || children}
      </button>
    );
  }
}

export default PaperButton;
