import React from 'react';
import { OptionChild } from '../OptionChild';
declare type Props = {
    checked: any;
    children: OptionChild | OptionChild[];
    callback?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};
declare type State = Readonly<{
    selectedOption: any;
}>;
declare class PaperRadio extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
    private handleOptionChange;
}
export default PaperRadio;
