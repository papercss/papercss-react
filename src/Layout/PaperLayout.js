import React from 'react';
import css from './index.css';

class PaperLayout extends React.Component {
  render() {
    return (
      <div className={['row', this.props.flexPosition].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export default PaperLayout;
