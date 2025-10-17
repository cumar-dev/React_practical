import React, { useEffect, useState } from 'react'

const Github = () => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    useEffect(()=> {
         let isMounted = true;
        const fetchData = async ()=> {
           try {
            const response = await fetch(`https://api.github.com/users/cumar-dev`);
            if(!response.ok) {
                throw new Error(`https error exsists: ${response.status}`)
            }
            const result = await response.json();
            if(isMounted) {
                setData(result);
                setLoading(false);
            }
        } catch (error) {
            // console.error('error exsists', error);
            if(isMounted) {
          setError(error.message);
            setLoading(false)
            }
            
        }
        }
       fetchData();
       return()=> {
       isMounted = false;
       }
    }, [])
    if(loading) return <h1>Loading ...</h1>
     if (error) return <h1>Error: {error}</h1>;
  return (
   <>
   <h2>{data.login}</h2>
   <img src={data.avatar_url} alt={data.name} />
   <p>{data.bio}</p>
   </>
  )
}

export default Github;