import React from "react";

import { HTMLAttributes } from "../common/types";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

type ListElement = HTMLUListElement | HTMLOListElement;

export type ListProps<T extends ListElement = HTMLUListElement> = {
  as: "ol" | "ul";
} & {
  ordered: true;
} & HTMLAttributes<T>;

function List<T extends ListElement = HTMLUListElement>({
  as: asProp,
  ordered,
  className,
  ...rest
}: ListProps<T>) {
  const ElementType = asProp || (ordered ? "ol" : "ul");

  return (
    <ElementType className={classNames(styles.list, className)} {...rest} />
  );
}

export default List;
