import React from 'react';
import css from './index.css';

class PaperCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChecks: []
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentWillMount() {
    let preChecked = [];

    if (this.props.checked) {
      preChecked.push(this.props.checked);
    }

    this.setState({selectedChecks: preChecked});
  }

  boxIsChecked(e) {
    let selectedChecks = this.state.selectedChecks;

    if (selectedChecks.indexOf(e) >= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  handleOptionChange(e) {
    let component = this;
    let targetVal = e.target.value;
    let selectedChecks = this.state.selectedChecks;

    if (selectedChecks.indexOf(targetVal) >= 0) {
      let index = selectedChecks.indexOf(targetVal);
      selectedChecks.splice(index, 1);
    }
    else {
      selectedChecks.push(targetVal);
    }

    this.setState({selectedChecks: selectedChecks});

    if (component.props.callback) {
      return component.props.callback(e);
    }
  }

  render() {
    const children = this.props.children;

    return (
      <fieldset className={'form-group'}>
        {React.Children.map(children, (child, i) => {
          return (
            <label htmlFor={child.props.inputID} className={'paper-check'}>
              <input type='checkbox' id={child.props.inputID} value={child.props.val} checked={this.boxIsChecked(child.props.val) ? true : false} onChange={this.handleOptionChange} />
              <span>{child.props.label}</span>
            </label>
          )
        })}
      </fieldset>
    );
  }
}

export default PaperCheckbox;
