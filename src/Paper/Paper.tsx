import React from "react";

import styles from "./styles.css";

export type PaperProps<T extends HTMLElement = HTMLElement> = {
  as: keyof React.ReactHTML;
} & React.AllHTMLAttributes<T>;

function Paper<T extends HTMLElement = HTMLElement>(props: PaperProps<T>) {
  return <div />;
}
