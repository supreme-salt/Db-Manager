import React from 'react';
import PropTypes from 'prop-types';

const ProductForm = props => {
  console.log(props);
  return (
    <div>
      <input type="text" placeholder="Enter Name" />
      <select name="categories" id="categories">
        {props.categories.map(category => <option value={category}>{category}</option>)}
      </select>
      <input type="text" placeholder="Enter Year" />
      <select name="seasons" id="seasons">
        {props.seasons.map(season => <option value={season}>{season}</option>)}
      </select>
      <input type="text" placeholder="Enter Brand" />
      <input type="text" placeholder="Enter Description" />
    </div>
  );
};

ProductForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  seasons: PropTypes.arrayOf(PropTypes.object)
};
ProductForm.defaultProps = { categories: [], seasons: [] };

export default ProductForm;
