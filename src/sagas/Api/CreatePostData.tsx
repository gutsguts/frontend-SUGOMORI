// let params: RequestInit = {
//   postText: string[],
// };

export const createPostData = (postText: string) => {
  const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
  return fetch(url, {
    method: 'POST',
    body: postText,
    // method: 'post',
  });
};

// const url = 'http://localhost:3001/todo_datas';
// export default function createTodoData(todoText) {
//   return axios.post(url, { todoText: todoText });
// }

// export default function fetchPostData() {
//   return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
//     method: 'get',
//   });
// }

// export default function deletePostData(id: any) {
//   return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
//     method: 'delete',
//   });
// }
