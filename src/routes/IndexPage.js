import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example.js';
import './IndexPage.css';

function IndexPage() {
  return (
    <div className="normal">
      <h1 className="title" >Yay! Welcome to dva!</h1>
      {/* <div className="welcome" /> */}
      <p>基于dva实现 todoList</p>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
