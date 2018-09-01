import React from 'react';
import { OptionChild } from '../OptionChild';
export declare type Props = {
    checked: string;
    children: OptionChild | OptionChild[];
    callback?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};
declare type State = Readonly<{
    selectedChecks: Record<string, boolean>;
}>;
declare class PaperCheckbox extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
    private handleOptionChange;
}
export default PaperCheckbox;
