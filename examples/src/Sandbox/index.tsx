import React from "react";
import { Typography } from "react-paper-css";
import styled, { css } from "styled-components";

import Editors from "./Editors";

const UnderlinedButton = styled.button`
  text-decoration: none;
  background: transparent;
  background-repeat: repeat-x;
  background-size: 6px 6px;
  background-position: 0 90%;

  border: 0;
  margin: 10px;
  padding: 0;
  width: auto;
  overflow: visible;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  ${({ active }: { active?: boolean }) => {
    if (active) {
      const underlineColor = "#86a361";
      return css`
        background-image: linear-gradient(
            5deg,
            transparent 65%,
            ${underlineColor} 80%,
            transparent 90%
          ),
          linear-gradient(
            165deg,
            transparent 5%,
            ${underlineColor} 15%,
            transparent 25%
          ),
          linear-gradient(
            165deg,
            transparent 45%,
            ${underlineColor} 55%,
            transparent 65%
          ),
          linear-gradient(
            15deg,
            transparent 25%,
            ${underlineColor} 35%,
            transparent 50%
          );
      `;
    }
    return "";
  }};
`;

export type SandboxProps = {
  source: string;
};

const initialState = {
  markupVisible: false,
  sourceVisible: true,
};

type State = typeof initialState;

class Sandbox extends React.PureComponent<SandboxProps, State> {
  public readonly state = initialState;

  public render() {
    const { source } = this.props;
    const { markupVisible, sourceVisible } = this.state;
    return (
      <section>
        <Typography as="section">
          <UnderlinedButton
            active={sourceVisible}
            onClick={this.toggleShowSource}
          >
            Playground
          </UnderlinedButton>
          <UnderlinedButton
            active={markupVisible}
            onClick={this.toggleShowMarkup}
          >
            Show HTML
          </UnderlinedButton>
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
