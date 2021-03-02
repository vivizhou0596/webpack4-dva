import request from '../utils/request';

const $ex = '/mock/60389bb13c563f0020cb3cb5/example';

// 获取todolist
export function query(params) {
  // return request('/api/users', {
  return request(`/api${$ex}/todoList`, {
    method: 'GET',
    body: params,
  });
}

// 创建todo
export function create(params) {
  return request(`/api${$ex}/create`, {
    method: 'POST',
    body: params,
  });
}

// 改变状态
export function edit(params) {
  return request(`/api${$ex}/edit`, {
    method: 'POST',
    body: params,
  });
}
// 删除todo
export function deleteTodo(params) {
  return request(`/api${$ex}/delete`, {
    method: 'POST',
    body: params,
  });
}
