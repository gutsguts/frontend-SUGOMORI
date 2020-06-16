import { sessionApiLogin } from './sessionApiLogin';
import { sessionApiLogout } from './sessionApiLogout';

// import { useState } from 'react';
import Cookies from 'js-cookie';

// class User {
  export const new User() ={
  isLoggedIn = () => Cookies.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => Cookies.set(key, value);
  get = (key: string) => Cookies.get(key);

  login = async (email: string, password: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(email);
      console.log(password);
    }
    await sessionApiLogin({ email, password });
    if (process.env.NODE_ENV !== 'production') {
      console.log('isLoggedIn(User.tsxログイン処理後):' + this.isLoggedIn());
      console.log('this.get(User.tsx):', this.get('isLoggedIn'));
    }
    return true;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false.toString());
      sessionApiLogout;
    }
  };
}

export default new User();
