import React from 'react';

import css from './index.css';
import classNames from '../utils/classNames';

export type PaperFormProps = React.AllHTMLAttributes<HTMLFormElement>;

class PaperForms extends React.Component<PaperFormProps> {
  public render() {
    return (
      <form className={classNames(css.formGroup, this.props.className)}>
        {this.props.children}
      </form>
    );
  }
}

export default PaperForms;
