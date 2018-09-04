import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.css";

export type PaperFormProps = React.AllHTMLAttributes<HTMLFormElement>;

class PaperForms extends React.Component<PaperFormProps> {
  public render() {
    const { className, ...rest } = this.props;

    return (
      <form className={classNames(styles.formGroup, className)} {...rest} />
    );
  }
}

export default PaperForms;
