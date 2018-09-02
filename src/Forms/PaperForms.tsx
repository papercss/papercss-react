import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.css";

export type PaperFormProps = React.AllHTMLAttributes<HTMLFormElement>;

class PaperForms extends React.Component<PaperFormProps> {
  public render() {
    return (
      <form className={classNames(styles.formGroup, this.props.className)}>
        {this.props.children}
      </form>
    );
  }
}

export default PaperForms;
