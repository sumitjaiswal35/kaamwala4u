import React from 'react';
import City from './city';

class state extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {details: this.props.details, state: this.props.state};
  }

  handleChange(event) {
    this.props.handleStateChange({state: event.currentTarget.value});
    this.setState({state: event.currentTarget.value});
  }

  render() {
    const that = this;
    // this.state = this.props;
    return (
      <div>
        <label className='titles'>State : </label>
        <select name="type" onChange={that.handleChange}>
          {this.state.details.state.map(value =>
            <option value={value}>{value}</option>
          )}
        </select><br></br>
        <City details={that.state.details[that.state.state]} city={that.state.details[that.state.state].city[0]}  handleStateChange={this.props.handleStateChange}/>
      </div>
    );
  }
}

export default state;