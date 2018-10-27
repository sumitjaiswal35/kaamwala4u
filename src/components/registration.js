import React from 'react';
import WorkerType from './workerType';
import City from './city';
import AddressList from './../model/address';
import State from './state';
import axios from 'axios'

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleIdTypeChange = this.handleIdTypeChange.bind(this);
    this.handleIdNumberChange = this.handleIdNumberChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleComfortChange = this.handleComfortChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      services: 'cook',
      state: 'Uttar Pradesh'
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.services !== nextState.services
      || this.state.state !== nextState.state
      || this.state.city !== nextState.city
      || this.state.area !== nextState.area;
  }

  handleStateChange(object) {
    this.setState(object);
  }

  handleFNameChange(event) {
    this.handleStateChange({firstName: event.currentTarget.value});
  }

  handleLNameChange(event) {
    this.handleStateChange({lastName: event.currentTarget.value});
  }

  handleMobileChange(event) {
    this.handleStateChange({mobile: event.currentTarget.value});
  }

  handleIdTypeChange(event) {
    this.handleStateChange({idType: event.currentTarget.value});
  }

  handleIdNumberChange(event) {
    this.handleStateChange({idNumber: event.currentTarget.value});
  }


  handleGenderChange(event) {
    this.handleStateChange({gender: event.currentTarget.value});
  }

  handleAgeChange(event) {
    this.handleStateChange({age: event.currentTarget.value});
  }

  handleComfortChange(event) {
    this.handleStateChange({isComfortableWithHouse: event.currentTarget.checked});
  }

  handleServiceChange(event) {
    this.handleStateChange({services: event.currentTarget.value});
  }

  handleSubmit(event) {
    var data = {
      "name": {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName
      },
      "mobile":[this.state.mobile],
      "idType":this.state.idType,
      "idNumber":this.state.idNumber,
      "gender": this.state.gender,
      "age": this.state.age,
      "isComfortableWithHouse": this.state.isComfortableWithHouse,
      "services":[this.state.services],
      "specializations": {
        "cookSpecializations" : this.state.specializations
      },
      "address": {
        "state": this.state.state,
        "city": this.state.city,
        "areas":[this.state.area],
        "apartments":this.state.apartments
      }
    }

    axios.post(`http://localhost:3000/workers`, data)
      .then(
        (response) => {
          response.render('workers');
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }

  address = './../model.address';

    render() {


    return (
      <div className='form'>
        <form method="POST" action="/workers">
          <label className='titles'>First Name :</label>
          <input type="text" onChange={this.handleFNameChange}></input><br></br>
          <label className='titles'>Last Name :</label>
          <input type="text" onChange={this.handleLNameChange}></input><br></br>
          <label className='titles'>Mobile Number :</label>
          <input type="text" onChange={this.handleMobileChange}></input><br></br>
          <label className='titles'>ID Type :</label>
          <select onChange={this.handleIdTypeChange}>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
            <option value="DL">DL</option>
            <option value="Voter Id">Voter Id</option>
          </select><br></br>
          <label className='titles'>ID Number :</label>
          <input type="text" onChange={this.handleIdNumberChange}></input><br></br>
          <label className='titles'>Gender :</label>
          <select onChange={this.handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select><br></br>
          <label className='titles'>Age :</label>
          <input type="text" onChange={this.handleAgeChange}></input><br></br>
          <label className='titles'>Individual House :</label>
          <input type="checkbox" onChange={this.handleComfortChange}></input><br></br>
          <label className='titles'>Service :</label>
          <select name="type" onChange={this.handleServiceChange}>
            <option value='cook'>Cook</option>
            <option value='maid'>Maid</option>
            <option value='carcleaning'>Car Cleaning</option>
            <option value='babysitter'>Baby Sitter</option>
            <option value='laundry'>Laundary</option>
          </select>
          <WorkerType workerType={this.state.services} handleStateChange={this.handleStateChange}></WorkerType>
          <State details={AddressList} state={this.state.state} handleStateChange={this.handleStateChange}/>
          <label className="titles"></label>
          <button type="button" onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default Registration;