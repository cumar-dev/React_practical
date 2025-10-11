import React from 'react'

const UserProfile = ({user}) => {
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