import React from 'react';

class workerSpecialization extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {specializations: this.props.specializations,
      selected: this.props.selected};
  }

  handleChange(event) {
    if(event.currentTarget.checked) {
      this.state.selected.push(event.currentTarget.value);
    } else {
      this.state.selected.splice(this.state.selected.indexOf(event.currentTarget.value), 1);
    }
    this.props.handleStateChange({specializations: this.state.selected});
    this.setState({selected: this.state.selected});
    }

  render() {
    const that = this;
    this.state = this.props;
    return (
      <div>
        <label className='titles'>Specialization : </label>

          {this.state.specializations.map(value =>
            <span><input onChange={this.handleChange} type="checkbox" value={value} checked={that.state.selected.indexOf(value) !== -1}/>{value}</span>
          )}
      </div>
    );
  }
}

export default workerSpecialization;