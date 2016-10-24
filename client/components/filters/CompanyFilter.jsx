import React, { Component } from 'react';

const propTypes = {};

class CompanyFilter extends Component {
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
    const categoryCheckboxes = categories.map((category, idx) => (
      <div className={`${category}-checkbox`} key={idx} >
        <label>
          <input type="checkbox" name={category} value={category} />
          {category}
        </label>
      </div>
    ));
    return (
      <div className="category-filter-container">
        {categoryCheckboxes}
      </div>
    );
  }
}

CompanyFilter.propTypes = propTypes;

export default CompanyFilter;
