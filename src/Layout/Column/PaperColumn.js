import React from 'react';
import css from './index.css';

class PaperColumn extends React.Component {
  render() {
    return (
      <div className={['col', this.props.colSize, this.props.colDisplay].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export default PaperColumn;
