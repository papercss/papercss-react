import React from 'react';
import css from './index.css';

type Props = {
  label?: string;
  inputSize?: string;
  inputID?: string;
  placeholder?: string;
  disabled?: boolean;
};

class PaperInput extends React.Component<Props> {
  public render() {
    const { label, inputSize, inputID, placeholder, disabled } = this.props;
    if (label) {
      return (
        <div className={'form-group'}>
          <label className={inputSize} htmlFor={inputID}>
            {label}
          </label>
          <input
            className={inputSize}
            placeholder={placeholder}
            id={inputID}
            disabled={disabled}
          />
        </div>
      );
    }
    return (
      <div className={'form-group'}>
        <input
          className={inputSize}
          placeholder={placeholder}
          id={inputID}
          disabled={disabled}
        />
      </div>
    );
  }
}

export default PaperInput;
