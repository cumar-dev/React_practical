import React from 'react'
import { Link } from 'react-router'

const UserList = () => {
    const users = [
        {
            id: 1,
            name: "Alice",
        },
        {
            id: 2,
            name: "Bob",
        }
    ]
  return (
    <>
    <h2>User Lists</h2>
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

export default UserList