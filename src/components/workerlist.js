import React from 'react';
import axios from 'axios'

class WorkerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/workers`)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            workers: result.data.workers
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error:error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, workers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        {
          workers.map(function(worker, idx){
            return (<li key={idx}>{worker.idNumber}</li>)
          })
        }
        </ul>
      );
    }
  }
}

export default WorkerList;
