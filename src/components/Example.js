import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Checkbox, Button, Icon, Input, message } from 'antd';
import './Example.css';
// import { connect } from 'dva';

@connect(({ example }) => {
  return {
    ...example,
  };
})
export default class Example extends Component {
  // eslint-disable-next-line no-undef
  state={
    name: '',
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetch',
    });
  }
  createClickHandler() {
    const { dispatch } = this.props;
    const { name } = this.state;
    dispatch({
      type: 'example/create',
      payload: {
        name,
      },
    }).then((res) => {
      const { data: { obj } } = res;
      if (obj.code === 'success') {
        message.success('增加成功');
        this.setState({ name: '' });
        dispatch({
          type: 'example/reload',
        });
      }
    });
  }
  deleteClickHandler(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/deleteTodo',
      payload: {
        id,
      },
    }).then((res) => {
      const { data: { obj } } = res;
      if (obj.code === 'success') {
        message.success('删除成功');
        dispatch({
          type: 'example/reload',
        });
      }
    });
  }
  toggleStatus(id, status) {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/update',
      payload: {
        id,
        status,
      },
    }).then((res) => {
      const { data: { obj } } = res;
      if (obj.code === 'success') {
        message.success('修改成功');
        dispatch({
          type: 'example/reload',
        });
      }
    });
  }
  render() {
    const { list } = this.props;
    const { name } = this.state;
    return (
      <div style={{ width: 300, margin: '0px auto' }}>
        <div style={{ display: 'flex' }}>
          <span >
            <Input
              placeholder="请输入名称"
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </span>
          <Button
            type="primary"
            onClick={() => this.createClickHandler()}
          >
            新增
          </Button>
        </div>
        <ul style={{ listStyle: 'none', padding: '0px', textAlign: 'left', marginTop: 10 }}>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <span style={{ marginRight: 10, width: '200px' }}>
                    <Checkbox
                      defaultChecked={false}
                      checked={item.status === '1'}
                      onChange={e => this.toggleStatus(item.id, e.target.value)}
                    >
                      {item.name}
                    </Checkbox>
                  </span>
                  <span onClick={() => this.deleteClickHandler(item.id)}>
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

