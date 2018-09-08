import { AllHTMLAttributes } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HTMLAttributes<TElement extends HTMLElement> = Omit<
  AllHTMLAttributes<TElement>,
  "as"
>;
