import React from 'react'
import UseFetch from './UseFetch';
const Posts = () => {
   
    const {data, loading, error} = UseFetch(`https://jsonplaceholder.typicode.com/posts`);
     if(loading) return <h1>Loading ...</h1>
     if (error) return <h1>Error: {error}</h1>;
  return (
    <>
    <div>
        {JSON.stringify(data)}
    </div>
    </>
  )
}

export default Posts;