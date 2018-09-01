import React from 'react';

import classNames from '../../utils/classNames';

import css from './index.css';

type Props = {
  colSize?: string;
  colDisplay?: string;
};

class PaperColumn extends React.Component<Props> {
  public render() {
    const { colSize, colDisplay } = this.props;

    return (
      <div className={classNames('col', colSize, colDisplay)}>
        {this.props.children}
      </div>
    );
  }
}

export default PaperColumn;
