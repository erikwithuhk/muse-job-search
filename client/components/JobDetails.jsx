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
  render() {
    return (
      <div>
        <Link to="/" >Back to Browse Jobs</Link>
        <p>{this.state.job.title}</p>
        <p>{this.state.job.company}</p>
      </div>
    );
  }
}

JobDetails.propTypes = propTypes;

export default JobDetails;
