import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Checkbox, Icon, message } from 'antd';
import EditTodo from './EditTodo';
import './Example.css';

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

  deleteClickHandler(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/deleteTodo',
      payload: {
        id,
      },
    }).then((obj) => {
      if (obj.code === 'success') {
        message.success('删除成功');
      }
    });
  }
  toggleStatus(id, status) {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/update',
      payload: {
        id,
        props: {
          key: 'status',
          value: status,
        },
      },
    }).then((obj) => {
      if (obj.code === 'success') {
        message.success('修改成功');
      }
    });
  }
  render() {
    // const { list } = this.props;
    // eslint-disable-next-line no-undef
    const localList = sessionStorage.getItem('todoList');
    const list = localList ? JSON.parse(localList) : this.props.list;
    return (
      <div style={{ width: 400, margin: '0px auto' }}>
        <ul style={{ listStyle: 'none', padding: '0px', textAlign: 'left', marginTop: 10 }}>
          {
            list.map((item, index) => {
              return (
                <li key={index} className="todo-item">
                  <span style={{ marginRight: 10, width: '360px' }}>
                    <Checkbox
                      defaultChecked={false}
                      checked={item.status}
                      onChange={e => this.toggleStatus(item.id, e.target.checked)}
                    />
                    <EditTodo
                      item={item}
                    />
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

