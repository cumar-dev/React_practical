import React, { useContext } from 'react'
import UserContext from './UserContext';

// const UserProfile = ({user}) => {
const UserProfile = () => {
 const user = useContext(UserContext);
  return (
    <>
    <h2>User Profile</h2>
    <h3>{user.id}</h3>
     <h3>{user.name}</h3>
     <h3>{user.role}</h3>
    </>
  )
}

export default UserProfile;