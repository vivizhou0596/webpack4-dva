import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example.js';
import './IndexPage.css';

function IndexPage() {
  return (
    <div className="normal">
      <h1 className="title" style={{ color: '#f00' }}>Yay! Welcome to dva!</h1>
      <div className="welcome" />
      <p>测试样式</p>
      <Example />
      <ul className="list">
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
