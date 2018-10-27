import React from 'react';
import WorkerSpecialization from './workerSpecialization';
import Specializations from './../model/workerSpecialization';

class WorkerType extends React.Component {

  render() {
    return (
      <WorkerSpecialization handleStateChange={this.props.handleStateChange} selected={[]} specializations={Specializations[this.props.workerType]}/>
    );
  }
}

export default WorkerType;