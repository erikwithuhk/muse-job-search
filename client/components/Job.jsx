import React, { Component } from 'react';
// import { Icon } from 'react-fa';

const propTypes = {

};

class Job extends Component {
  // const date = newDate();
  render() {
    return (
      <li className="job-list-item">
        <h3 className="job-title">Job title</h3>
        <h4 className="company">Company</h4>
        <p className="location">Location</p>
        <p className="date-posted">Posted 1 day ago</p>
      </li>
    );
  }
}

Job.propTypes = propTypes;

export default Job;
