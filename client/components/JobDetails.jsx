import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import { Icon } from 'react-fa';

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
    let titleNode;
    if (this.state.job.title) {
      titleNode = (
        <a
          className="title"
          href={this.state.job.museLink}
        >
          {this.state.job.title} <Icon name="external-link" className="external-link" />
        </a>
      );
    }
    let locationNode;
    if (this.state.job.locations) {
      locationNode = (
        <div className="location secondary">
          <div className="left"><Icon name="map-marker" /></div>
          <div className="right">{this.state.job.locations}</div>
        </div>
      );
    }
    let levelNode;
    if (this.state.job.levels) {
      levelNode = (
        <div className="location secondary">
          <div className="left"><Icon name="bar-chart" /></div>
          <div className="right">{this.state.job.levels}</div>
        </div>
      );
    }
    let categoryNode;
    if (this.state.job.category) {
      categoryNode = (
        <div className="location secondary">
          <div className="left"><Icon name="tags" /></div>
          <div className="right">{this.state.job.category}</div>
        </div>
      );
    }
    return (
      <div className="job-details-container">
        <Link to="/" className="back-link" ><Icon name="chevron-left" className="back-arrow" />
          Back to Browse Jobs
        </Link>
        <div className="job-details-header">
          <h4 className="company">{this.state.job.company}</h4>
          {titleNode}
          {locationNode}
          {levelNode}
          {categoryNode}
        </div>
        <div className="job-description" />
        <a
          className="bottom-button bottom-button--fixed apply-button"
          href={this.state.job.museLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read More and Apply <Icon name="external-link" className="external-link" />
        </a>
      </div>
    );
  }
}

JobDetails.propTypes = propTypes;

export default JobDetails;
