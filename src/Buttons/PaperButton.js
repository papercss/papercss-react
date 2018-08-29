import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

function sizeToClass(size) {
  switch (size) {
    case 'large':
      return styles.Large;
    case 'small':
      return styles.Small;
    default:
      return '';
  }
}

class PaperButton extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(['large', 'small']),
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  render() {
    const { size, className, ...rest } = this.props;
    return (
      <button
        className={[styles.PaperButton, sizeToClass(size), className].join(' ')}
        {...rest}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default PaperButton;
