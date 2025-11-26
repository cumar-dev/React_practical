import React from 'react'
import { Link } from 'react-router-dom'
export const users = [
        {
            id: 1,
            name: "Alice",
        },
        {
            id: 2,
            name: "Bob",
        },
        {
            id: 3,
            name: "Omar"
        },
        {
            id: 4,
            name: "Adnaan"
        },
        {
            id: 5,
            name: "Ahmed"
        },
        {
            id: 6,
            name: "Masood"
        }
    ]
const UserList = () => {
   
  return (
    <>
    <h2 className='font-bold text-xl mt-3'>User Lists</h2>
    <ul>
        {
            users.map((user) => (
                <li key={user.id}>
                    <Link to={`/userList/${user.id}`}>{user.name}</Link>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default UserList;