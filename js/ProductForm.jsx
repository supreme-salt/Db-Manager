import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      category: 'Jackets',
      year: null,
      season: 'SS',
      brand: null,
      description: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  handleSubmit() {
    axios
      .post('http://localhost:3000/api/products', this.state)
      .then(response => {
        if (response) {
          alert('Product added');
        }
      })
      .catch(err => {
        if (err) {
          alert('Fill all boxes');
        }
      });
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
        <select name="category" onChange={this.handleChange}>
          {this.props.categories.map(category => <option value={category}>{category}</option>)}
        </select>
        <input type="number" placeholder="Enter Year" name="year" onChange={this.handleChange} />
        <select name="season" onChange={this.handleChange}>
          {this.props.seasons.map(season => <option value={season}>{season}</option>)}
        </select>
        <input type="text" placeholder="Enter Brand" name="brand" onChange={this.handleChange} />
        <input type="text" placeholder="Enter Description" name="description" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Add Product
        </button>
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
