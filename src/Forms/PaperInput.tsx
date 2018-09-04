import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.css";

type Props = {
  block?: boolean;
  label?: React.ReactNode;
  inputSize?: string;
  inputID?: string;
  placeholder?: string;
  disabled?: boolean;
} & React.AllHTMLAttributes<HTMLDivElement>;

class PaperInput extends React.Component<Props> {
  public render() {
    const {
      block,
      label,
      inputID,
      placeholder,
      disabled,
      className: propsClassName,
      ...rest
    } = this.props;

    const blockClass = block && styles.inputBlock;

    return (
      <div className={classNames(styles.formGroup, propsClassName)} {...rest}>
        {label && (
          <label htmlFor={inputID} className={classNames(blockClass)}>
            {label}
          </label>
        )}
        <input
          className={classNames(styles.paperInput, blockClass)}
          placeholder={placeholder}
          id={inputID}
          disabled={disabled}
        />
      </div>
    );
  }
}

export default PaperInput;
