import React from 'react';
import WorkerSpecialization from './workerSpecialization';

class WorkerType extends React.Component {

  render() {
    const specs = {
      'cook': ['Veg', 'Non Veg'],
      'maid': ['Full Time', 'Utensils', 'Cleaning'],
      'carcleaning': ['Daily', 'Weekly', 'Monthly'],
      'babysitter': ['Half Day', 'Full Day'],
      'laundry': ['Ironing', 'Washing', 'Dry Cleaning']
    };
    const specializations = specs[this.props.workerType];
    let body = <WorkerSpecialization specializations={specializations}/>

    return (
      body
    );
  }
}

export default WorkerType;