import React from 'react';
import styles from './index.scss';
declare type Props = {
    flexPosition?: Exclude<keyof typeof styles, 'row'>;
};
declare class PaperLayout extends React.Component<Props> {
    render(): JSX.Element;
}
export default PaperLayout;
