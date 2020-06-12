type LoginParams = {
  email: string;
  password: string;
  // loginStatus: string;
};
// const loginUrl: string = process.env.REACT_APP_API_URL_SIGN_IN!;
// const logoutUrl: string = process.env.REACT_APP_API_URL_SIGN_OUT!;

export const sessionApi = {
  login: ({ email, password }: LoginParams) => {
    // const loginFormData = {
    //   user: {
    //     email: email,
    //     password: password,
    //     // remember_me: 1,
    //   },
    // };
    console.log(email);
    console.log(password);

    const obj = {
      email: email,
      password: password,
    };
    const method = 'POST';
    const body = JSON.stringify(obj);
    const credentials = 'include';
    const mode = 'cors';
    const headers = {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    fetch(
      'http://localhost:3000/api/v1/auth/sign_in',
      // { method, headers, body, credentials, mode },
      { method, headers, body },

      // fetch(logoutUrl, {
      // method: 'POST',
      // body: JSON.stringify(loginFormData),
    )
      .then((response) => {
        console.log('reaponse(sessionApi.login)');
        console.log(response);
        const loginStatus = 'true';

        // return response;
        return loginStatus;
      })
      .catch((error) => {
        console.log('error');
        console.error(error);
        const loginStatus = 'false';
        // return error;
        return loginStatus;
      });
  },
  logout: () => {
    fetch('http://localhost:3000/api/v1/auth/sign_out', {
      // fetch(logoutUrl, {
      method: 'DELETE',
    }).then((response) => {
      console.log('success');
      console.log('reaponse(sessionApi.login)');
      console.log(response);
      const loginStatus = 'false';
      // return error;
      return loginStatus;
      // return response;
    });
  },
};
