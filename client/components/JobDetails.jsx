import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const propTypes = {
  params: React.PropTypes.object,
};

class JobDetails extends Component {
  constructor() {
    super();
    this.state = {
      job: {},
    };
  }
  componentDidMount() {
    this.getJob();
  }
  getJob() {
    request.get(`/api/v1/jobs/${this.props.params.id}`)
           .then(response => this.setState({ job: response.body }))
           .catch(err => err);
  }
  fillJobDescription() {
    const jobDescriptionNode = document.querySelector('.job-description');
    if (jobDescriptionNode) {
      jobDescriptionNode.innerHTML = this.state.job.description;
    }
  }
  render() {
    this.fillJobDescription();
    return (
      <div className="job-details-container">
        <Link to="/" >Back to Browse Jobs</Link>
        <h2>{this.state.job.title}</h2>
        <p>{this.state.job.company}</p>
        <div className="job-description" />
      </div>
    );
  }
}

JobDetails.propTypes = propTypes;

export default JobDetails;
