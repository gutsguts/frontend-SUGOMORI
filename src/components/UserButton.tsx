import React from 'react';
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button';
// import Avatar from 'material-ui/Avatar';
// import Dialog, { DialogContent, DialogTitle, DialogActions } from 'material-ui/Dialog';
import { Button, Avatar, Modal, Textarea } from '@zeit-ui/react';

interface UserButtonProps {
  user: {
    id: string;
    email: string;
  };
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// export const UserButton = (props: UserButtonProps) => {
export const UserButton = (props: UserButtonProps) => {
  const displayButton = () => {
    if (props.user === null) {
      return (
        <div>
          <Button
            color="contrast"
            // onClick={props.handleDialog({
            //   name: 'signUpDialogOpen',
            //   open: true,
            // })}
          >
            新規ユーザー追加
          </Button>
          <Button
            color="contrast"
            // onClick={this.props.handleDialog({
            //   name: 'loginDialogOpen',
            //   open: true,
            // })}
          >
            ログインする
          </Button>
        </div>
      );
    } else {
      const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';

      return (
        <Avatar
          src={url}
          color="contrast"
          // onClick={props.handleDialog({ name: 'logoutDialogOpen', open: true })}
        >
          {props.user.email.slice(0, 2)}
        </Avatar>
      );
    }
  };
  return (
    <div>
      {displayButton()}
      <Modal
      // onRequestClose={this.props.handleDialog({
      //   name: 'signUpDialogOpen',
      //   open: false,
      // })}
      // open={this.props.signUpDialogOpen}
      >
        <Modal.Title>新規ユーザー追加</Modal.Title>
        <Modal.Content>
          <Textarea
            autoFocus
            width="100%"
            // // label="name"
            value={props.name}
            // // helperText="半角英数"
            // onChange={props.handleFormChange('name')}
            // // type="text"
          />
          <Textarea
            width="100%"
            // label="email"
            value={props.email}
            // helperText="半角英数"
            // onChange={props.handleFormChange('email')}
            // type="email"
          />
          <Textarea
            width="100%"
            // label="password"
            value={props.password}
            // helperText="半角英数"
            // onChange={props.handleFormChange('password')}
            // type="password"
          />
          <Textarea
            width="100%"
            // label="password_confirmation"
            value={props.password_confirmation}
            // helperText="半角英数"
            // onChange={props.handleFormChange('password_confirmation')}
            // type="password"
          />
        </Modal.Content>
        <Modal.Action>
          <Button
          // onClick={props.handleSubmitSignUp()}
          >
            新規追加する
          </Button>
        </Modal.Action>
      </Modal>

      <Modal
      // onRequestClose={props.handleDialog({
      //   name: 'loginDialogOpen',
      //   open: false,
      //   stateToBeChanged: {
      //     email: '',
      //     password: '',
      //     loginDialogOpen: false,
      //   },
      // })}
      // open={props.loginDialogOpen}
      >
        <Modal.Title>ログイン</Modal.Title>
        <Modal.Content>
          <Textarea
            autoFocus
            width="100%"
            // label="email"
            value={props.email}
            // helperText="半角英数"
            // onChange={props.handleFormChange('email')}
            // type="email"
          />
          <Textarea
            width="100%"
            // label="password"
            value={props.password}
            // helperText="半角英数"
            // onChange={props.handleFormChange('password')}
            // type="password"
          />
        </Modal.Content>
        <Modal.Action>
          <Button
          // onClick={props.handleSubmitLogin()}
          >
            ログインする
          </Button>
        </Modal.Action>
      </Modal>

      <Modal
      // onRequestClose={this.props.handleDialog({
      //   name: 'logoutDialogOpen',
      //   open: false,
      // })}
      // open={props.logoutDialogOpen}
      >
        <Modal.Title>ログアウトしますか？</Modal.Title>
        <Modal.Action>
          <Button
          // onClick={props.handleSubmitLogout()}
          >
            ログアウトする
          </Button>
        </Modal.Action>
      </Modal>
    </div>
  );
};
