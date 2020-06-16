type RejistrationParams = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
};
export const registrationApi = {
  signUp: ({ email, password, password_confirmation, name }: RejistrationParams) => {
    const registrationFormData = {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    };
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify(registrationFormData),
    }).then((response) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('then(registrationApi.signUp)');
      }
      return response;
    });
  },
};
