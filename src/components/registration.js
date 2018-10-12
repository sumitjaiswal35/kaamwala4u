import React from 'react';
import WorkerType from './workerType';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {workerType: 'cook'};
  }

  handleChange(event) {
    this.setState({workerType: event.currentTarget.value});
  }

  render() {
    const a = [
      {'label': "L1", 'value':"V1"},
      {'label': "L2", 'value':"V2"},
      {'label': "L3", 'value':"V3"}
    ];
    return (
      <div className='form'>
        <form method="POST" action="/users">
          <label className='titles'>First Name :</label>
          <input type="text" name="name"></input><br></br>
          <label className='titles'>Middle Name :</label>
          <input type="text" name="name"></input><br></br>
          <label className='titles'>Last Name :</label>
          <input type="text" name="name"></input><br></br>
          <label className='titles'>Mobile Number :</label>
          <input type="text" name="mobile"></input><br></br>
          <label className='titles'>ID Type :</label>
          <select name="idType">
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
            <option value="DL">DL</option>
            <option value="Voter Id">Voter Id</option>
          </select><br></br>
          <label className='titles'>ID Number :</label>
          <input type="text" name="id"></input><br></br>
          <label className='titles'>Gender :</label>
          <select name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select><br></br>
          <label className='titles'>Age :</label>
          <input type="text" name="age"></input><br></br>
          <label className='titles'>Individual House :</label>
          <input type="checkbox" name="comfort"></input><br></br>
          <label className='titles'>Type :</label>
          <select name="type" onChange={this.handleChange}>
            <option value='cook'>Cook</option>
            <option value='maid'>Maid</option>
            <option value='carcleaning'>Car Cleaning</option>
            <option value='babysitter'>Baby Sitter</option>
            <option value='laundry'>Laundary</option>
          </select><br></br>
          <WorkerType workerType={this.state.workerType}></WorkerType>
          <RadioGroup  horizontal>
            <RadioButton value="apple">
              Apple
            </RadioButton>
            <RadioButton value="orange">
              Orange
            </RadioButton>
            <RadioButton value="melon">
              Melon
            </RadioButton>
          </RadioGroup>
        </form>
      </div>
    );
  }
}

export default Registration;