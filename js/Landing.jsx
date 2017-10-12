import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products')
      .then(results => {
        this.setState({ products: results.data });
      })
      .catch(err => console.log(err)); //eslint-disable-line
  }

  render() {
    return (
      <div>
        <h1>Salt DB Manager</h1>
        <input type="text" placeholder="Search Item" />
        <div>{this.state.products.map(item => <h3>{item.name}</h3>)}</div>
      </div>
    );
  }
}

export default Landing;
