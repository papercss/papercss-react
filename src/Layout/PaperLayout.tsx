import React from "react";

import classNames from "../utils/classNames";

import styles from "./index.scss";

type Props = {
  flexPosition?: Exclude<keyof typeof styles, "row">;
};

class PaperLayout extends React.Component<Props> {
  public render() {
    const { flexPosition } = this.props;
    return (
      <div
        className={classNames(styles.row, flexPosition && styles[flexPosition])}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PaperLayout;
