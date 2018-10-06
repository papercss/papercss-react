import React from "react";

import { HTMLAttributes } from "../common/types";
import { HeadingType } from "../Typography";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

export type CardProps<T extends HTMLElement = HTMLElement> = {
  as?: keyof React.ReactHTML;
} & HTMLAttributes<T>;

function Card<T extends HTMLElement = HTMLElement>({
  as: ElementType = "article",
  className,
  ...rest
}: CardProps<T>) {
  return (
    <ElementType className={classNames(styles.card, className)} {...rest} />
  );
}

Card.Body = <T extends HTMLElement = HTMLElement>({
  as: ElementType = "section",
  className,
  ...rest
}: CardProps<T>) => {
  return (
    <ElementType className={classNames(styles.cardBody, className)} {...rest} />
  );
};

export type CardTitleProps = {
  as?: HeadingType;
} & HTMLAttributes<HTMLHeadingElement>;

Card.Title = ({
  as: ElementType = "h4",
  className,
  ...rest
}: CardTitleProps) => (
  <ElementType className={classNames(styles.cardTitle, className)} {...rest} />
);

Card.Subtitle = ({
  as: ElementType = "h5",
  className,
  ...rest
}: CardTitleProps) => (
  <ElementType
    className={classNames(styles.cardSubtitle, className)}
    {...rest}
  />
);

type CardTextProps = {
  as?: keyof React.ReactHTML;
} & HTMLAttributes<HTMLElement>;

Card.Text = ({ as: ElementType = "p", className, ...rest }: CardTextProps) => (
  <ElementType className={classNames(styles.cardText)} {...rest} />
);

export default Card;
