import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';
import FilterCheckboxes from './filters/FilterCheckboxes.jsx';
import locations from '../lib/locations.js';

const propTypes = {
  setFilters: React.PropTypes.func,
};

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.applyFilters = this.applyFilters.bind(this);
  }
  applyFilters(e) {
    e.preventDefault();
    const filters = [];
    const formData = new FormData(e.target);
    for (const pair of formData.entries()) {
      const filter = {};
      filter[pair[1]] = pair[0];
      filters.push(filter);
    }
    this.props.setFilters(filters);
    hashHistory.push('/');
  }
  render() {
    const categories = [
      'Account Management',
      'Business & Strategy',
      'Creative & Design',
      'Customer Service',
      'Data Science',
      'Editorial',
      'Education',
      'Engineering',
      'Finance',
      'Fundraising & Development',
      'Healthcare & Medicine',
      'HR & Recruiting',
      'Legal',
      'Marketing & PR',
      'Operations',
      'Project & Product Management',
      'Retail',
      'Sales',
      'Social Media & Community',
    ];
    const locationsDatalist = (
      <datalist id="locations">
        {locations.map((location, idx) => (<option key={idx} value={location} />))}
      </datalist>
    );
    return (
      <div className="filter-container">
        <h2 className="page-title">Filter Jobs</h2>
        <form className="filter-form" onSubmit={this.applyFilters}>
          <div className="filter-form-container">
            <h3 className="filter-subhead">By category:</h3>
            <FilterCheckboxes items={categories} type="category" />
            <h3 className="filter-subhead">By location:</h3>
            <input type="text" list="locations" />
          </div>
          {locationsDatalist}
          <input
            className="bottom-button bottom-button--fixed"
            type="submit"
            value="Apply Filters"
          />
        </form>
      </div>
    );
  }
}

Filters.propTypes = propTypes;

export default withRouter(Filters);
