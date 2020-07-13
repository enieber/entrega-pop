import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

function Category({ selectedOption, setSelectedOption, categories }) {
  return (
    <Select
      placeholder="Selecione uma categoria"
      value={selectedOption}
      onChange={setSelectedOption}
      options={categories}
    />
  );
}

Category.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf({ value: PropTypes.number, label: PropTypes.string }).isRequired,
};

export default Category;
