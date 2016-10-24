import React from 'react';

const propTypes = {
  items: React.PropTypes.array,
  type: React.PropTypes.string,
};

const FilterCheckboxes = ({ items, type }) => {
  const checkboxes = items.map((item, idx) => (
    <div className={`checkbox-container ${item}-checkbox`} key={idx} >
      <input type="checkbox" id={item} name={type} value={item} />
      <label htmlFor={item}>{item}</label>
    </div>
  ));
  return (
    <div className={`${type}-filter-container`}>
      {checkboxes}
    </div>
  );
};

FilterCheckboxes.propTypes = propTypes;

export default FilterCheckboxes;
