import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'react-fa';

const propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  company: React.PropTypes.string,
  location: React.PropTypes.string,
  postedDate: React.PropTypes.number,
  shortName: React.PropTypes.string,
};

class Job extends Component {
  static setMonthsAgoText(numberOfDays) {
    const monthsAgo = Math.floor(numberOfDays % 30);
    if (monthsAgo < 2) {
      return '1 month ago';
    }
    return `${monthsAgo} months ago`;
  }
  constructor() {
    super();
    this.state = {
      daysAgo: 0,
    };
  }
  componentDidMount() {
    this.calculateDaysAgo();
  }
  setDaysAgoText() {
    const { daysAgo } = this.state;
    if (daysAgo >= 30) {
      return Job.setMonthsAgoText(daysAgo);
    } else if (daysAgo === 0) {
      return 'today';
    } else if (daysAgo === 1) {
      return '1 day ago';
    }
    return `${daysAgo} days ago`;
  }
  calculateDaysAgo() {
    const oneDay = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const postedDate = new Date(this.props.postedDate).getTime();
    const daysAgo = Math.round((now - postedDate) / oneDay);
    this.setState({ daysAgo });
  }
  render() {
    const daysAgoText = this.setDaysAgoText();
    return (
      <li className="job-list-item">
        <Link to={`/jobs/${this.props.id}/${this.props.shortName}`}>
          <h4 className="company">{this.props.company}</h4>
          <h3 className="title">{this.props.title}</h3>
          <p className="location">{this.props.location}</p>
          <p className="date-posted secondary"><Icon name="calendar" /> Posted {daysAgoText}</p>
        </Link>
      </li>
    );
  }
}

Job.propTypes = propTypes;

export default Job;
