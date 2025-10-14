import React, { useContext } from 'react'
import UserProfile from './UserProfile'
import UserContext from './UserContext'

// const Navbar = ({user}) => {
const Navbar = () => {
  const user = useContext(UserContext);
  return (
  <>
  <h2>Navbar in admin of {user.role}</h2>
  {/* <UserProfile user={user} /> */}
  <UserProfile />
  </>
  )
}

export default Navbar