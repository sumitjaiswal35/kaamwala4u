import React from 'react';
import Apartment from './apartment';

class area extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {details: this.props.details, area: this.props.area}
  }

  handleChange(event) {
    this.props.handleStateChange({area: event.currentTarget.value});
    this.setState({area: event.currentTarget.value});
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
        <label className='titles'>Area : </label>
        <select name="type" onChange={that.handleChange}>
          {this.state.details.area.map(value =>
            <option value={value}>{value}</option>
          )}
        </select><br></br>
        <Apartment apartment={that.state.details[that.state.area].apartment} selected={[]}  handleStateChange={this.props.handleStateChange}/>
      </div>
    );
  }
}

export default area;