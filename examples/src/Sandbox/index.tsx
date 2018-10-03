import React from "react";
import { Typography } from "react-paper-css";

import Editors from "./Editors";
import { UnderlinedToggle } from "./UnderlinedToggle";

const defaultInitialState = {
  markupVisible: false,
  sourceVisible: true,
};

type State = typeof defaultInitialState;

export type SandboxProps = {
  source: string;
  initialState?: Partial<State>;
};

class Sandbox extends React.PureComponent<SandboxProps, State> {
  public readonly state = {
    ...defaultInitialState,
    ...this.props.initialState,
  };

  public render() {
    const { source } = this.props;
    const { markupVisible, sourceVisible } = this.state;
    return (
      <section>
        <Typography as="section">
          <UnderlinedToggle
            active={sourceVisible}
            onClick={this.toggleShowSource}
          >
            Playground
          </UnderlinedToggle>
          <UnderlinedToggle
            active={markupVisible}
            onClick={this.toggleShowMarkup}
          >
            Show HTML
          </UnderlinedToggle>
        </Typography>
        <Editors
          initialSource={source}
          showMarkup={markupVisible}
          showSource={sourceVisible}
        />
      </section>
    );
  }

  private toggleShowSource = () => {
    this.setState(({ sourceVisible }) => ({ sourceVisible: !sourceVisible }));
  };

  private toggleShowMarkup = () => {
    this.setState(({ markupVisible }) => ({ markupVisible: !markupVisible }));
  };
}

export default Sandbox;
