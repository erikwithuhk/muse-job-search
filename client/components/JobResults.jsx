import React, { Component } from 'react';
import Job from './Job.jsx';

const propTypes = {

};

class JobResults extends Component {
  render() {
    return (
      <ul className="job-result-list">
        <Job />
      </ul>
    );
  }
}

export default JobResults;
