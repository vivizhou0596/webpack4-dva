import React, { Component } from 'react';
import { Input, message } from 'antd';
import { connect } from 'dva';
import Example from '../components/Example.js';

import './IndexPage.css';

class IndexPage extends Component {
  // eslint-disable-next-line no-undef
  state={
    name: '',
  };
  createClickHandler() {
    const { dispatch } = this.props;
    const { name } = this.state;
    if (name === '') {
      message.warn('请先添加Todo');
      return;
    }
    dispatch({
      type: 'example/create',
      payload: {
        name,
      },
    }).then((obj) => {
      if (obj.code === 'success') {
        message.success('增加成功');
        this.setState({ name: '' });
      }
    });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="normal">
        <div className="header">
          <div className="header-content">
            <span>toDoList</span>
            <Input
              placeholder="添加ToDo"
              style={{ width: 200 }}
              maxLength={24}
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              onPressEnter={() => this.createClickHandler()}
            />
          </div>
        </div>
        <Example />
      </div>
    );
  }
}


export default connect(({ example }) => {
  return {
    ...example,
  };
})(IndexPage);
