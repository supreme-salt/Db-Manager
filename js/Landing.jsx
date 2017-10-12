import React from 'react';
import PropTypes from 'prop-types';

const Landing = props => (
  <div>
    <h1>Salt DB Manager</h1>
    <input type="text" placeholder="Search Item" />
    <div>{props.products.map(item => <h3 key={item.id}>{item.name}</h3>)}</div>
  </div>
);

Landing.propTypes = { products: PropTypes.arrayOf(PropTypes.object) };
Landing.defaultProps = { products: [] };

export default Landing;
