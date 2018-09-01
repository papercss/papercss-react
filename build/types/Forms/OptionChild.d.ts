import { ReactElement } from 'react';
export declare type OptionChildProps = {
    inputID: string;
    val: string;
    label: string;
};
export declare type OptionChild = ReactElement<OptionChildProps>;
export declare function optionsFromChildren(children: OptionChild | OptionChild[]): OptionChild[];
