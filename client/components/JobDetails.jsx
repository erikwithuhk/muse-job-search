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
        <Link to="/" className="back-link" >Back to Browse Jobs</Link>
        <div className="job-details-header">
          <h4 className="company">{this.state.job.company}</h4>
          <a className="title" href={this.state.job.museLink}>{this.state.job.title}</a>
          <p className="location secondary">{this.state.job.locations}</p>
          <p className="level secondary">{this.state.job.levels}</p>
          <p className="category secondary">{this.state.job.category}</p>
        </div>
        <div className="job-description" />
        <a className="bottom-button apply-button" href={this.state.job.museLink}>
          Read More and Apply
        </a>
      </div>
    );
  }
}

JobDetails.propTypes = propTypes;

export default JobDetails;
