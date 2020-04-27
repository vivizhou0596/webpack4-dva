import React from 'react';
import { Router, Route, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';

const { ConnectedRouter } = routerRedux;
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
