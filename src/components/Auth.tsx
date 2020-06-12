import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';

interface AuthProps {
  children: JSX.Element;
}

export const Auth = (props: AuthProps) => {
  return User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;
};
