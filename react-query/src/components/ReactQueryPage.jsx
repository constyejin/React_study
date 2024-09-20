import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ReactQueryPage = () => {
  // queryFn 함수로 분리 가능
  // const fetchPost = () => {
  //   return axios.get('http://localhost:3004/posts');
  // }
  
  const { isLoading, data, isError, error } = useQuery({
    // API 호출에 유니크한 이름을 부여할 수 있다.
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get('http://localhost:3004/posts');
    },
    // API 호출 에러시 재시도 기본 횟수 3회 (retry로 원하는만큼 지정 가능)
    retry: 1,
    select: (data) => {
      return data.data
    }
  });

  console.log('DATA', isLoading,data);
  console.log('ERROR', isError, error);

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if(isError) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      {data.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
};

export default ReactQueryPage
