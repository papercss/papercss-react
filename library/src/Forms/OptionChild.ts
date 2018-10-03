import { ReactElement } from 'react';

export type OptionChildProps = {
  inputID: string;
  val: string;
  label: string;
};

export type OptionChild = ReactElement<OptionChildProps>;

export function optionsFromChildren(
  children: OptionChild | OptionChild[]
): OptionChild[] {
  return Array.isArray(children) ? (children as OptionChild[]) : [children];
}
