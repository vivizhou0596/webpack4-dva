import React from 'react';
import './Example.css';

const Example = () => {
  return (
    <div style={{ color: '#f00' }}>
      Example
      <p className="bg-blue">红色背景</p>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
