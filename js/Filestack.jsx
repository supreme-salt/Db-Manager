import React from 'react';
import ReactFilestack from 'filestack-react';

const options = {
  accept: 'image/*',
  maxFiles: 1,
  storeTo: {
    location: 's3'
  }
};

const Picker = () => (
  <ReactFilestack
    apikey={process.env.FILESTACK_KEY}
    buttonText="Choose Image"
    buttonClass="picker"
    options={options}
    onSuccess={result => console.log(result)}
  />
);

export default Picker;
