import request from '../utils/request';

export function query(params) {
  return request('/api/users', {
    method: 'POST',
    body: params,
  });
}
