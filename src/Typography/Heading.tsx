import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.scss";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
} & React.AllHTMLAttributes<HTMLDivElement>;
class PaperHeading extends React.Component<Props> {
  public static defaultProps = {
    as: "h1",
  };
  public render() {
    const { as, className, ...props } = this.props;
    const ElementType = as;
    return (
      <ElementType className={classNames(styles.heading, className)} {...props}>
        {this.props.children}
      </ElementType>
    );
  }
}

export default PaperHeading;
