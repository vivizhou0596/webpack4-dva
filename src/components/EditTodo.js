import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Input, message } from 'antd';
import './Example.css';

@connect(({ example }) => {
  return {
    ...example,
  };
})
export default class EditTodo extends Component {
  // eslint-disable-next-line no-undef
  state={
    value: '',
    isEdit: false,
  }
  clickHandler(name) {
    this.setState({
      value: name,
      isEdit: true,
    });
  }
  editEnterHandler() {
    const { dispatch, item: { id } } = this.props;
    const { value } = this.state;
    dispatch({
      type: 'example/update',
      payload: {
        id,
        props: {
          key: 'name',
          value,
        },
      },
    }).then((obj) => {
      if (obj.code === 'success') {
        message.success('修改成功');
        this.setState({
          isEdit: false,
          value: '',
        });
      }
    });
  }
  render() {
    const { item: { name } } = this.props;
    const { value, isEdit } = this.state;
    return (
      <span
        style={{ display: 'inline-block', cursor: 'pointer', marginLeft: '4px' }}
        onClick={() => this.clickHandler(name)}
      >
        {
          isEdit
          ? (
            <Input
              style={{ width: 200 }}
              maxLength={24}
              value={value}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
              onPressEnter={() => this.editEnterHandler()}
            />
          )
          : (
            <span>{name}</span>
          )
        }
      </span>
    );
  }
}

