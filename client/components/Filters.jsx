import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';
import FilterCheckboxes from './filters/FilterCheckboxes.jsx';
import categories from '../lib/categories.js';
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
      filter[pair[0]] = pair[1];
      filters.push(filter);
    }
    this.props.setFilters(filters);
    hashHistory.push('/');
  }
  render() {
    const locationsDatalist = (
      <datalist id="locations">
        {locations.map((location, idx) => (<option key={idx} value={location} />))}
      </datalist>
    );
    const levels = [
      'Internship',
      'Entry Level',
      'Mid Level',
      'Senior Level',
    ];
    return (
      <div className="filter-container">
        <h2 className="page-title">Filter Jobs</h2>
        <form className="filter-form" onSubmit={this.applyFilters}>
          <div className="filter-form-container">
            <h3 className="filter-subhead">By location:</h3>
            <input type="text" name="location" list="locations" />
            <h3 className="filter-subhead">By company:</h3>
            <input type="text" name="company" />
            <h3 className="filter-subhead">By level:</h3>
            <FilterCheckboxes items={levels} type="level" />
            <h3 className="filter-subhead">By category:</h3>
            <FilterCheckboxes items={categories} type="category" />
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
