import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import User from '../components/User';

import { useState, useEffect } from 'react';
import { Note } from '@zeit-ui/react';

type LogoutProps = {
  errMessage: '';
  message: string;
};

export const Logout = (props: LogoutProps) => {
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    const userLogout = async () => {
      try {
        await User.logout();
        if (process.env.NODE_ENV !== 'production') {
          console.log('Logout.tsx', User.isLoggedIn());
        }
      } catch (e) {
        setErrMessage('ログアウトに失敗しました。');
      }
    };
    userLogout();
  }, []);

  return (
    // <Container className="center">
    // <Row className="justify-content-md-center">
    <div>
      {props.errMessage && <Note type="warning">{props.message}</Note>}
      <h2>ログアウトしました</h2>
      <div className="text-center">
        <Link to="/login">ログイン画面へ</Link>
      </div>
    </div>
    // </Row>
    // </Container>
  );
};
