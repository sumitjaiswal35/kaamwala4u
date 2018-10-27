import React from 'react';
import Area from './area';

class city extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {details: this.props.details, city: this.props.city}
  }

  handleChange(event) {
    this.props.handleStateChange({city: event.currentTarget.value});
    this.setState({city: event.currentTarget.value});
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
        <label className='titles'>City : </label>
        <select name="type" onChange={that.handleChange}>
        {this.state.details.city.map(value =>
          <option value={value}>{value}</option>
        )}
        </select><br></br>
        <Area details={that.state.details[that.state.city]} area={that.state.details[that.state.city].area[0]}  handleStateChange={this.props.handleStateChange}/>
      </div>
    );
  }
}

export default city;