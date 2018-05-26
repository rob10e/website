// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import type { RouterHistory } from 'react-router-dom';

import indexRoutes from './routes/index';

import './assets/scss/material-kit-react.css';

const hist: RouterHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => (
        <Route path={prop.path} key={key} component={prop.component} /> // eslint-disable-line
      ))}
    </Switch>
  </Router>,
  document.getElementById('root') || new Element(),
);
