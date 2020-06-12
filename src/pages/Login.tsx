// import * as React from 'react';

// export const Login = () => {
//   return <h1>hoge</h1>;
// };

import * as React from 'react';
// import React, { Component } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import User from '../components/User';
import { useState } from 'react';

// import { Button } from '@zeit-ui/react'
import * as H from 'history';

type LoginProps = {
  email: '';
  password: '';
  errMessage: '';
  history: H.History;
  message: string;
};

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const click = async () => {
    try {
      await User.login(email, password);

      props.history.push({ pathname: 'list1' });
    } catch (e) {
      setErrMessage('メールアドレスかパスワードが違います');
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container className="center">
      <Row className="justify-content-md-center">
        <Form>
          {props.errMessage && <Alert variant="danger">{props.message}</Alert>}
          <p>
            <b>ログイン</b>
          </p>
          <Form.Group controlId="email">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="email"
              placeholder="メールアドレスを入力"
              onChange={handleChangeEmail}
              value={props.email}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>パスワード</Form.Label>
            <Form.Control
              type="password"
              placeholder="パスワードを入力"
              onChange={handleChangePassword}
              value={props.password}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={click}>
            ログイン
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
