import React from "react";

import classNames from "../utils/classNames";

import styles from "./index.scss";

type Props = {
  as: keyof React.ReactHTML;
  flexPosition?: Exclude<keyof typeof styles, "row">;
} & React.AllHTMLAttributes<HTMLDivElement>;

class PaperLayout extends React.Component<Props> {
  public static defaultProps = {
    as: "div",
  };

  public render() {
    const { flexPosition, as, className: propsClassName, ...rest } = this.props;
    return (
      <div
        className={classNames(
          styles.row,
          flexPosition && styles[flexPosition],
          propsClassName
        )}
        {...rest}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PaperLayout;
