import React from 'react';
import { useState } from 'react';
import './App.css';

const HeroImage = ({ imageUrl, alt }) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} style={{ width: '100%', maxHeight: '500px' }} />
    </div>
  );
};

export default HeroImage;