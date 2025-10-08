import { useEffect, useState } from "react";

function FetchData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        const fetchUser = async()=> {
            setLoading(true);
            // await new Promise((resolve)=> setTimeout(resolve, 10000));
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                console.log(data);
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('error exsists', error);
            }
        }
        fetchUser();
    }, []);
    if(loading) return <h1>Loading ...</h1>
    return(
        <>
        <div>
         <h2>List Of users</h2>
         <ul>
         {
            users.map((u)=> (
         <li key={u.id}>{u.name}</li>
            ))
         }
         </ul>
         </div>
        </>
    )
}

export default FetchData;