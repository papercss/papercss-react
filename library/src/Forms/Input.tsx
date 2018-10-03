import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.css";

type Props = {
  block?: boolean;
  label?: React.ReactNode;
  inputId?: string;
  placeholder?: string;
  disabled?: boolean;
} & React.AllHTMLAttributes<HTMLDivElement>;

const uniqueIdCounter = 0;
function makeUniqueId() {
  return `paper-input-#${uniqueIdCounter}`;
}

class Input extends React.Component<Props> {
  public uniqueId = makeUniqueId();

  public render() {
    const {
      block,
      label,
      inputId,
      placeholder,
      disabled,
      className: propsClassName,
      ...rest
    } = this.props;

    const blockClass = block && styles.inputBlock;
    const id = inputId === undefined && label ? this.uniqueId : inputId;

    return (
      <div className={classNames(styles.formGroup, propsClassName)} {...rest}>
        {label && (
          <label htmlFor={id} className={classNames(blockClass)}>
            {label}
          </label>
        )}
        <input
          className={classNames(styles.paperInput, blockClass)}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
        />
      </div>
    );
  }
}

export default Input;
