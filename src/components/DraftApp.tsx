// import React from 'react';
// import {Header} from '../components/header'
// // import DraftBottomNavigation from './DraftBottomNavigation';
// import { sessionApi, registrationApi } from '../components/Api'
// // import SimpleDialog from '../common/SimpleDialog';

// import { useState, useEffect } from 'react';

// const initialDraftState = {
//   draftTitle: '',
//   draftMemo: '',
// };

// const initialLoginState = {
//   email: '',
//   password: '',
//   password_confirmation: '',
//   name: '',
//   loginDialogOpen: false,
//   logoutDialogOpen: false,
//   signUpDialogOpen: false,
// };

// const initialBottomNavigationValue = {
//   bottomNavigationValue: 0,
// };

// const initialSnackbarState = {
//   snackbarOpen: false,
//   snackbarMessage: '',
// };

// const initialSimpleDialogState = {
//   simpleDialogTitle: '',
//   simpleDialogContent: '',
//   simpleDialogOpen: false,
// };

// export const DraftApp = () => {

//   const [bottomNavigationValue, setBottomNavigationValue] = useState(0);
//   const [drafts, setDrafts] = useState([]);
//   const [id, setId] = useState(0);

//       // bottomNavigationValue: 0,
//       // drafts: [],
//       // id: 0,
//       // ...initialDraftState,
//       // ...initialLoginState,
//       // ...initialSnackbarState,
//       // listDialogOpen: false,
//       // selectedDraftId: 0,
//       // user: null,
//       // ...initialSimpleDialogState,

//   handleChange = (name) => (event, value) => {
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleDialog = ({ name, open, stateToBeChanged }) => (event) => {
//     event.preventDefault();
//     this.setState({
//       [name]: open,
//       ...stateToBeChanged,
//     });
//   };

//   handleFormChange = (name) => (event) => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const id = this.state.id + 1;
//     const draft = {
//       id: id,
//       title: this.state.draftTitle,
//       memo: this.state.draftMemo,
//       createdAt: this.getCreatedAt(new Date()),
//     };
//     const drafts = this.state.drafts.concat(draft);
//     this.setState({
//       id: id,
//       drafts: drafts,
//       ...initialDraftState,
//       ...initialBottomNavigationValue,
//     });
//     this.handleSnackbar({ message: '保存しました' });
//   };

//   getCreatedAt = (date) => {
//     return `${date.getFullYear()}年${
//       date.getMonth() + 1
//     }月${date.getDate()}日${date.getHours()}時${date.getMinutes()}分${date.getSeconds()}秒`;
//   };

//   handleSnackbar = ({ message }) => {
//     this.setState({
//       snackbarOpen: true,
//       snackbarMessage: message,
//     });
//   };

//   handleSnackbarClose = () => (event) => {
//     event.preventDefault();
//     this.setState({
//       ...initialSnackbarState,
//     });
//   };

//   handleSubmitLogin = () => (event) => {
//     event.preventDefault();
//     sessionApi
//       .login({ email: this.state.email, password: this.state.password })
//       .then((response) => {
//         this.setState({
//           user: response.data.result.user,
//         });
//       })
//       .then(
//         this.setState({
//           ...initialLoginState,
//         }),
//       )
//       .then(() => {
//         this.handleSnackbar({ message: 'ログインしました' });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   handleSubmitLogout = () => (event) => {
//     event.preventDefault();
//     sessionApi
//       .logout()
//       .then(
//         this.setState({
//           user: null,
//           ...initialLoginState,
//         }),
//       )
//       .then(() => {
//         this.handleSnackbar({ message: 'ログアウトしました' });
//       })
//       .catch((error) => {
//         console.log('error');
//       });
//   };

//   handleSubmitSignUp = () => (event) => {
//     event.preventDefault();
//     registrationApi
//       .signUp({
//         name: this.state.name,
//         email: this.state.email,
//         password: this.state.password,
//         password_confirmation: this.state.password_confirmation,
//       })
//       .then(
//         this.setState({
//           ...initialLoginState,
//         }),
//       )
//       .then(() => {
//         this.handleSnackbar({ message: '登録完了するためのメールを送信しました' });
//       })
//       .then(() => {
//         this.handleSimpleDialog({
//           title: '仮登録完了しました',
//           content:
//             '登録完了するためのメールを送信しました。メールを確認して、登録を完了してください。',
//           open: true,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   handleSimpleDialog = ({ title, content, open }) => {
//     this.setState({
//       simpleDialogTitle: title,
//       simpleDialogContent: content,
//       simpleDialogOpen: open,
//     });
//   };

//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <div>
//           <Header
//             handleDialog={this.handleDialog}
//             handleFormChange={this.handleFormChange}
//             handleSubmitLogin={this.handleSubmitLogin}
//             handleSubmitLogout={this.handleSubmitLogout}
//             handleSubmitSignUp={this.handleSubmitSignUp}
//             {...this.state}
//           />
//           <DraftBody
//             {...this.state}
//             handleFormChange={this.handleFormChange}
//             handleSubmit={this.handleSubmit}
//             handleDialog={this.handleDialog}
//             handleChange={this.handleChange}
//           />
//           <DraftBottomNavigation
//             bottomNavigationValue={this.state.bottomNavigationValue}
//             handleChange={this.handleChange}
//           />
//           <Snackbar
//             open={this.state.snackbarOpen}
//             onRequestClose={this.handleSnackbarClose()}
//             message={this.state.snackbarMessage}
//           />
//           <SimpleDialog handleDialog={this.handleDialog} {...this.state} />
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
