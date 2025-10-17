import React from 'react'
import UseFetch from './UseFetch';

const RealGithub = () => {
    const {data, loading, error} = UseFetch(`https://api.github.com/users/cumar-dev`);
   if(loading) return <h1>Loading ...</h1>
     if (error) return <h1>Error: {error}</h1>;
  return (
    <>
    <div>RealGithub</div>
     <h2>{data.login}</h2>
   <img style={{borderRadius: "50%"}} src={data.avatar_url} alt={data.name} />
   <p>{data.bio}</p>
   </>
  )
}

export default RealGithub;