import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';

import SignUpPage from './SignUp';
import PasswordForgetPage from './PasswordForget';
import ChatApp from './Chat';
import AccountPage from './Account';

import * as routes from '../constants/routes';

import withAuthentication from './withAuthentication';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () =>

  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.CHAT} component={() => <ChatApp />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);
