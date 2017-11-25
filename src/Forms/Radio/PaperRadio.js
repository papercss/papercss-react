import React from 'react';
import css from './index.css';

class PaperRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.checked
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    let component = this;

    this.setState({
      selectedOption: e.target.value
    });

    if (component.props.callback) {
      return component.props.callback(e.target.value);
    }
  }

  render() {
    const children = this.props.children;

    return (
      <fieldset className={'form-group'}>
        {React.Children.map(children, (child, i) => {
          return (
            <label htmlFor={child.props.inputID} className={'paper-radio'}>
              <input type='radio' value={child.props.val} id={child.props.inputID} checked={this.state.selectedOption === child.props.val} onChange={this.handleOptionChange} />
              <span>{child.props.label}</span>
            </label>
          )
        })}
      </fieldset>
    );
  }
}

export default PaperRadio;
