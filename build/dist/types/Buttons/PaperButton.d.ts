import React, { ReactNode } from 'react';
declare type Size = 'large' | 'small';
export declare type Props = {
    size: Size;
    buttonType: string;
    buttonText: ReactNode;
} & React.AllHTMLAttributes<HTMLButtonElement>;
declare class PaperButton extends React.Component<Props> {
    render(): JSX.Element;
}
export default PaperButton;
