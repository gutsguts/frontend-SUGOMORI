import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { HomePage } from '../components/HomePage';

import { Auth } from '../components/Auth';
import User from '../components/User';
// import { List } from './list';
import { App } from '../../src/App';

export const LoginApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        <Auth>
          <Switch>
            {/* <Route exact path="/list" component={List} /> */}
            {/* <Redirect from="/" to="/list" /> */}

            <Route exact path="/app" component={App} />
            <Redirect from="/" to="/App" />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};
