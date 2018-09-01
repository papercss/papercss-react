import React from 'react';
import styles from './index.scss';
import classNames from '../utils/classNames';

type Props = {
  flexPosition?: Exclude<keyof typeof styles, 'row'>;
};

class PaperLayout extends React.Component<Props> {
  render() {
    const { flexPosition } = this.props;
    return (
      <div
        className={classNames(styles.row, flexPosition && styles[flexPosition])}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PaperLayout;
