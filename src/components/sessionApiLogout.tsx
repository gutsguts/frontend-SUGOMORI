require('dotenv').config();
import User from './User';

export const sessionApiLogout = async () => {
  const logoutUrl: string = process.env.REACT_APP_API_URL + '/sign_out';

  await fetch(logoutUrl, { method: 'DELETE' })
    .then((response) => {
      if (response.status == 200) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(sessionApi.tsx):', User.isLoggedIn());
        }
        User.set('isLoggedIn', 'false');
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(else後):', User.isLoggedIn());
        }
        throw new Error();
      }
    })
    .catch((error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('isLoggedIn(catch後):', User.isLoggedIn());
        console.log('errorの内容', JSON.stringify(error.json));
      }
    });
};
