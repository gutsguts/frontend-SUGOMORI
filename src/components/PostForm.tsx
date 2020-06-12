// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Field, reduxForm, reset } from 'redux-form';
// // import { Input } from 'react';
// // import { Input, Button, Message } from 'semantic-ui-react';
// // import { requestCreate } from '../actions';

// class PostForm extends Component {
//   locationInput({ input, meta: { touched, error }, ...custom }: { input: any; meta: any }) {
//     const hasError = touched && error !== undefined;
//     return (
//       <div>
//         {/* {hasError && <Message error header="Error" content={error} />} */}
//         {/* <Input error={hasError} fluid placeholder="Location..." {...input} {...custom} /> */}
//       </div>
//     );
//   }

//   submit(value: any, dispatch: any) {
//     // dispatch(requestCreate(value));
//     dispatch(reset('simple'));
//   }

//   render() {
//     // const { handleSubmit } = this.props;
//     return (
//       <div>
//         {/* <form onSubmit={handleSubmit(this.submit.bind(this))}> */}
//         {/* <Field name="location" component={this.locationInput} /> */}
//         <br />
//         {/* <Button type="submit">Submit</Button> */}
//         {/* </form> */}
//       </div>
//     );
//   }
// }

// const validate = (values: any) => {
//   const errors = {};
//   if (!values.location || values.location.trim() === '') {
//     // errors.location = 'Location required';
//   }
//   return errors;
// };

// // const exportPostForm = reduxForm({
// //   form: 'simple',
// //   validate,
// // })(PostForm);

// // const mapDispatchToProps = {
// //   requestCreate,
// // };

// export default connect(null, mapDispatchToProps)(exportPostForm);
