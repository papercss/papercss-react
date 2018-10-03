import React from "react";

import { HTMLAttributes } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

export type PaperProps<T extends HTMLElement = HTMLElement> = {
  as?: keyof React.ReactHTML;
} & HTMLAttributes<T>;

function Text<T extends HTMLElement = HTMLElement>({
  as: ElementType = "span",
  className,
  ...rest
}: PaperProps<T>) {
  return (
    <ElementType className={classNames(styles.text, className)} {...rest} />
  );
}

export default Text;
