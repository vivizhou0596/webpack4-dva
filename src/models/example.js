import { query, create } from '../services/example';

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
      console.log(response);
      yield put({
        type: 'save',
        payload: { list: response.data.data },
      });
    },
    *create({ payload }, { call }) {
      // return new Promise((resolve,reject)=>{
      //   const respons =  yield call(create, payload)
      //   resolve()
      //   // return yield call(create, payload)
      // })
      // console.log();
      return yield call(create, payload);
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
