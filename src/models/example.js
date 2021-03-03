import { query, create, deleteTodo, edit } from '../services/example';

export default {
  namespace: 'example',
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(query, payload);
      // console.log(response);
      yield put({
        type: 'save',
        payload: { list: response.data.data },
      });
    },
    *create({ payload, callback }, { call }) {
      return yield call(create, payload);
      // 以下代码是前端模拟服务器数据更新，可在页面看出实时更新效果
      // if (obj.code === 'success') {
      //   const tempList = yield select(state => state.example.list);
      //   let list = [];
      //   list = list.concat(tempList);
      //   const tempObj = {};
      //   tempObj.name = payload.name;
      //   tempObj.id = list.length;
      //   tempObj.status = '0';
      //   list.push(tempObj);
      //   yield put({
      //     type: 'save',
      //     payload: { list },
      //   });
      //   return obj;
      // }
    },
    *deleteTodo({ payload, callback }, { call }) {
      return yield call(deleteTodo, payload);
    },
    *update({ payload, callback }, { call }) {
      return yield call(edit, payload);
    },
    *reload({ payload }, { put }) {
      yield put({
        type: 'fetch',
        // payload: { list: response.data.data },
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
