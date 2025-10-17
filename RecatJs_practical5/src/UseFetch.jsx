import React, { useEffect, useState } from 'react'
const UseFetch = (url) => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
     useEffect(()=> {
          let isMounted = true;
         const fetchData = async ()=> {
            try {
             const response = await fetch(url);
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
             setLoading(false);
             }
             
         }
         }
        fetchData();
        return()=> {
        isMounted = false;
        }
     }, [url]);
     return {data, loading, error};
}

export default UseFetch;