import React from "react";

import { OptionChild, optionsFromChildren } from "./OptionChild";

import styles from "./styles.css";

export type Props = {
  checked: string;
  children: OptionChild | OptionChild[];
  callback?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

type State = Readonly<{
  selectedChecks: Record<string, boolean>;
}>;

function makeInitialState({ checked }: Props): State {
  return {
    selectedChecks: checked ? { [checked]: true } : {},
  };
}

class PaperCheckbox extends React.Component<Props, State> {
  public readonly state: State = makeInitialState(this.props);

  public render() {
    const { selectedChecks } = this.state;
    const { children, ...rest } = this.props;
    const options = optionsFromChildren(children);

    return (
      <fieldset className={styles.formGroup} {...rest}>
        {options.map(child => {
          const { inputID, val, label } = child.props;

          return (
            <label key={inputID} className={styles.paperCheck}>
              <input
                type="checkbox"
                id={inputID}
                value={val}
                checked={selectedChecks[val]}
                onChange={this.handleOptionChange}
              />
              <span>{label}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }

  private handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { callback } = this.props;
    const changedKey = e.target.value;

    this.setState(({ selectedChecks }) => ({
      selectedChecks: {
        ...selectedChecks,
        [changedKey]: !selectedChecks[changedKey],
      },
    }));

    if (callback) {
      return callback(e);
    }
  };
}

export default PaperCheckbox;
