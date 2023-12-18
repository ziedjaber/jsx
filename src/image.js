// Image.js
import React from 'react';

const Image = ({ url }) => {
  return <img src={url} alt="Product" style={{ width: '200px', height: '200px' }} />;
};

export default Image;
