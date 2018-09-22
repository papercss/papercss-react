import { AllHTMLAttributes, DetailedHTMLProps } from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type HTMLAttributesWithoutOmit<T extends HTMLElement> = DetailedHTMLProps<
  AllHTMLAttributes<T>,
  T
>;

export type HTMLAttributes<
  T extends HTMLElement,
  OmittedProps extends keyof HTMLAttributesWithoutOmit<T> = "as"
> = Omit<HTMLAttributesWithoutOmit<T>, OmittedProps>;
