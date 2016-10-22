import React, { Component } from 'react';

const propTypes = {

};

class Job extends Component {
  render() {
    return (
      <li className="job-list-item">
        <h3>Job title</h3>
      </li>
    );
  }
}

Job.propTypes = propTypes;

export default Job;
