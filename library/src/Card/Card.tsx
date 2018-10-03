import React from "react";

import { HTMLAttributes } from "../common/types";
import { HeadingType } from "../Typography";
import classNames from "../utils/classNames";

import styles from "./styles.scss";

export type ContainerProps<T extends HTMLElement = HTMLElement> = {
  as?: keyof React.ReactHTML;
} & HTMLAttributes<T>;

function Card<T extends HTMLElement = HTMLElement>({
  as: ElementType = "article",
  className,
  ...rest
}: ContainerProps<T>) {
  return (
    <ElementType className={classNames(styles.card, className)} {...rest} />
  );
}

Card.Body = <T extends HTMLElement = HTMLElement>({
  as: ElementType = "section",
  className,
  ...rest
}: ContainerProps<T>) => {
  return (
    <ElementType className={classNames(styles.cardBody, className)} {...rest} />
  );
};

export type TitleProps = {
  as?: HeadingType;
} & HTMLAttributes<HTMLHeadingElement>;

Card.Title = ({ as: ElementType = "h4", className, ...rest }: TitleProps) => (
  <ElementType className={classNames(styles.cardTitle, className)} {...rest} />
);

Card.Subtitle = ({
  as: ElementType = "h5",
  className,
  ...rest
}: TitleProps) => (
  <ElementType
    className={classNames(styles.cardSubtitle, className)}
    {...rest}
  />
);

export type TextProps = {
  as?: keyof React.ReactHTML;
} & HTMLAttributes<HTMLElement>;

Card.Text = ({ as: ElementType = "p", className, ...rest }: TextProps) => (
  <ElementType className={classNames(styles.cardText)} {...rest} />
);

export default Card;
