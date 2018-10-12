import React from 'react';

class workerSpecialization extends React.Component {

  render() {
    return (
      <div>
        <label className='titles'>Category : </label>
        <select name="category">
          {this.props.specializations.map(value =>
            <option key={value} value={value}>{value}</option>
          )}
        </select><br></br>
        <label className='titles'>Specialization : </label>
        <input type="text" name="specialization" required/><br></br>
      </div>
    );
  }
}

export default workerSpecialization;