import React, { Component } from 'react';
import { connect } from 'dva';
import './Example.css';
// import { connect } from 'dva';

@connect(({ example }) => {
  return {
    ...example,
  };
})
export default class Example extends Component {
  // state={};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetch',
    });
  };
  render() {
    const { example } = this.props;
    console.log(example)
    return (
      <div style={{ color: '#f00' }}>
        Example
        <p className="bg-blue">红色背景</p>
      </div>
    );
  }
}

