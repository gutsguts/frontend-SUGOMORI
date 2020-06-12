// import axios from 'axios';

export const deletePostData = (id: number) => {
  return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
    method: 'delete',
  });
};
