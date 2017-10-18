import React from 'react';
import ReactFilestack from 'filestack-react';
import PropTypes from 'prop-types';
import config from '../config';

const options = {
  accept: 'image/*',
  maxFiles: 1,
  fromSources: ['local_file_system'],
  storeTo: {
    location: 's3'
  }
};

const Picker = props => (
  <ReactFilestack
    apikey={config.FILESTACK_KEY}
    buttonText="Choose Image"
    buttonClass="picker"
    options={options}
    onSuccess={result => {
      console.log(result);
      props.addImage(result.filesUploaded[0].url);
    }}
  />
);

Picker.propTypes = {
  addImage: PropTypes.func
};

Picker.defaultProps = { addImage: item => item };

export default Picker;
