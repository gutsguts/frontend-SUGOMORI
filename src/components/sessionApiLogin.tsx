require('dotenv').config();

import User from './User';

type LoginParams = {
  email: string;
  password: string;
};

export const sessionApiLogin = async ({ email, password }: LoginParams) => {
  const obj = {
    email: email,
    password: password,
  };
  const method = 'POST';
  const body = JSON.stringify(obj);
  const credentials = 'include';
  const mode = 'cors';
  const headers = {
    'Content-Type': 'application/json',
  };

  const loginUrl: string = process.env.REACT_APP_API_URL + '/sign_in';
  if (process.env.NODE_ENV !== 'production') {
    console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
    console.log('loginUrl:', loginUrl);
    console.log('process.env.REACT_APP_API_URL_SIGN_IN!:', process.env.REACT_APP_API_URL_SIGN_IN!);
    console.log(
      'process.env.REACT_APP_API_URL_ALL_POST_DATAS!:',
      process.env.REACT_APP_API_URL_ALL_POST_DATAS!,
    );
  }

  return fetch(loginUrl, { method, headers, body })
    .then((response) => {
      if (response.status == 200) {
        User.set('isLoggedIn', 'true');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(sessionApi.tsx):', User.isLoggedIn());
        }
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(else後):', User.isLoggedIn());
        }

        throw new Error();
      }
    })
    .catch((error) => {
      User.set('isLoggedIn', 'false');
      if (process.env.NODE_ENV !== 'production') {
        console.log('isLoggedIn(catch後):', User.isLoggedIn());
        console.log('errorの内容', JSON.stringify(error.json));
      }
    });
};
