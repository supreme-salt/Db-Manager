import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      categories: 'Jackets',
      year: '',
      seasons: 'SS',
      brand: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
        <select name="categories" id="categories" onChange={this.handleChange}>
          {this.props.categories.map(category => <option value={category}>{category}</option>)}
        </select>
        <input type="number" placeholder="Enter Year" name="year" onChange={this.handleChange} />
        <select name="seasons" id="seasons" onChange={this.handleChange}>
          {this.props.seasons.map(season => <option value={season}>{season}</option>)}
        </select>
        <input type="text" placeholder="Enter Brand" name="brand" onChange={this.handleChange} />
        <input type="text" placeholder="Enter Description" name="description" onChange={this.handleChange} />
        <button type="submit"> Add Product</button>
      </div>
    );
  }
}

ProductForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  seasons: PropTypes.arrayOf(PropTypes.string)
};
ProductForm.defaultProps = { categories: [], seasons: [] };

export default ProductForm;
