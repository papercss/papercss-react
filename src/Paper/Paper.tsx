import React from "react";

import classNames from "../utils/classNames";

import styles from "./styles.css";

export type PaperProps<T extends HTMLElement = HTMLElement> = {
  as?: keyof React.ReactHTML;
} & React.AllHTMLAttributes<T>;

function Paper<T extends HTMLElement = HTMLElement>({
  as: ElementType = "div",
  className,
  ...rest
}: PaperProps<T>) {
  return (
    <ElementType className={classNames(styles.paper, className)} {...rest} />
  );
}

export default Paper;
