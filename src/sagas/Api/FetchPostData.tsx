// import axios from 'axios';

export const fetchPostData = () => {
  return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
    method: 'get',
  });
};
