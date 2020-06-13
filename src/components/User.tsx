import { sessionApi } from '../components/sessionApi';
import { useState } from 'react';

class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => localStorage.setItem(key, value);
  get = (key: string) => this.getLocalStorage(key);

  getLocalStorage = (key: string) => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email: string, password: string) => {
    // ログイン処理
    // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
    // 例外を出しして呼び出し元でcatchしてもいいかと思います。
    const loginStatus = 'false';

    console.log(email);
    console.log(password);

    sessionApi.login({ email, password });
    // console.log('response.text():' + response.text());

    // this.set('isLoggedIn', loginStatus.toString());
    // this.set('isLoggedIn', sessionApi.login({ email, password }).toString());
    this.set('isLoggedIn', JSON.stringify(sessionApi.login({ email, password })));

    console.log('isLoggedInの内容');
    console.log('isLoggedIn:' + this.isLoggedIn());
    // console.log('this.getLocalStorage:' + this.getLocalStorage('isLoggedIn'));
    console.log('this.getLocalStorage:', this.getLocalStorage('isLoggedIn'));

    return true;
  };

  logout = async () => {
    console.log('User.logout ');

    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false.toString());
      sessionApi.logout;

      // ログアウト処理
      // 他に必要な処理があるのならこちら
    }
  };
}

export default new User();
