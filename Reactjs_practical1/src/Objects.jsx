import { useState } from "react"
function UserInformation() {
    const [user, setUser] = useState({name: "Alice", age: 25, bio: "Data analytics"});
    const updateAge = ()=> {
     setUser({...user, age: user.age + 1});
    }

    return(
        <>
        <p> name: {user.name} , age: {user.age}, bio: {user.bio}</p>
        <button onClick={updateAge}>increase age</button>
        </>
    )
}

export default UserInformation;