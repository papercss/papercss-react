import React from "react";

import { OptionChild, optionsFromChildren } from "./OptionChild";
import styles from "./styles.css";

type Props = {
  checked: any;
  children: OptionChild | OptionChild[];
  callback?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

type State = Readonly<{
  selectedOption: any;
}>;

class PaperRadio extends React.Component<Props, State> {
  public readonly state: State = {
    selectedOption: this.props.checked,
  };

  public render() {
    const options = optionsFromChildren(this.props.children);
    const { selectedOption } = this.state;

    return (
      <fieldset className={styles.formGroup}>
        {options.map((child, i) => {
          const { inputID, val, label } = child.props;

          return (
            <label key={inputID}>
              <input
                type="radio"
                value={val}
                id={inputID}
                checked={selectedOption === val}
                onChange={this.handleOptionChange}
                className={styles.paperRadio}
              />
              <span>{label}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }

  private handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { callback } = this.props;
    const value = event.target.value;

    this.setState({ selectedOption: value });

    if (callback) {
      return callback(event);
    }
  };
}

export default PaperRadio;
