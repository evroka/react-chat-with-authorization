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
  <ul>
    <li><Link to={routes.CHAT}>Chat</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <div>
      <SignInPage/>
  </div>

export default Navigation;


/*<ul>
<li><Link to={routes.SIGN_IN}>Sign In</Link></li>
<li><Link to={routes.LANDING}>Landing</Link></li>
</ul>
<div>
    <SignInPage/>
  </div>

*/