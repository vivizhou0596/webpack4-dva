import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Checkbox, Button, Icon } from 'antd';
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
  }
  createClickHandler() {
    const { dispatch } = this.props;
    const param = { name: 'aaa', status: '0' };
    dispatch({
      type: 'example/create',
      payload: param,
    });
  }
  render() {
    const { list } = this.props;
    console.log(list);
    return (
      <div >
        <Button onClick={() => this.createClickHandler()}>新增</Button>
        <ul style={{ listStyle: 'none' }}>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <span style={{ marginRight: 10 }}>
                    <Checkbox defaultChecked={false}>{item.name}</Checkbox>
                  </span>
                  <span>
                    <Icon type="minus-circle" />
                  </span>
                </li>
              );
            })
          }
        </ul>

      </div>
    );
  }
}

