import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import SignInPage from './SignIn';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <nav className="nav navigation ">
    <li className="navbar-brand"><Link to={routes.CHAT}><button className="btn btn-outline-info btn-block nav-btn"type="button">Chat</button></Link></li>
    <li className="navbar-brand"><Link to={routes.ACCOUNT}><button className="btn btn-outline-info btn-block nav-btn"type="button">Account</button></Link></li>
    <li className="navbar-brand"><SignOutButton /></li>
  </nav>

const NavigationNonAuth = () =>
  <div>
      <SignInPage/>
  </div>

export default Navigation;