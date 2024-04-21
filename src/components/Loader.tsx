import { FaSpinner } from 'react-icons/fa';
import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust height for mobile and desktop
      }}
    >
      <FaSpinner size={64} color="blue" className="spin" />
    </div>
  );
};

export default Loader;
