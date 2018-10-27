import React from 'react';

class apartment extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {apartment: this.props.apartment, selected: this.props.selected}
  }

  handleChange(event) {
    if(event.currentTarget.checked) {
      this.state.selected.push(event.currentTarget.value);
    } else {
      this.state.selected.splice(this.state.selected.indexOf(event.currentTarget.value), 1);
    }
    this.props.handleStateChange({apartments: this.state.selected});
    this.setState({selected: this.state.selected});
    this.change = true;
  }

  render() {
    const that = this;
    if (!this.change) {
      this.state = this.props;
    }
    this.change = false;
    return (
      <div>
        <label className='titles'>Apartment : </label>
          {this.state.apartment.map(value =>
            <span><input onChange={this.handleChange} type="checkbox" value={value} checked={that.state.selected.indexOf(value) !== -1}/>{value}</span>
          )}
      </div>
    );
  }
}

export default apartment;