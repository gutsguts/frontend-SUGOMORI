import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

export const Posts = () => {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState({});
  const url: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;

  useEffect(() => {
    FetchData(url).then((res) => setPosts(res));
  }, []);
  return (
    <div>
      <span>{JSON.stringify(posts)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
