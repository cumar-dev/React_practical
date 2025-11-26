import React from 'react'
import { useParams } from 'react-router-dom';
import { users } from './UserList';

const UserProfile = () => {
  const {userId} = useParams();
const userInfo = users.filter(user => user.id == userId)[0];
  return (
    <div>
      <h2>User Profile</h2>
      {/* <p>User Id: {userId}</p> */}
      <p>User Id : {userInfo.id}</p>
      <p>User Name : {userInfo.name}</p>
    </div>
  )
}

export default UserProfile;