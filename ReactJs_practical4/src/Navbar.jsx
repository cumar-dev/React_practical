import React from 'react'
import UserProfile from './UserProfile'

const Navbar = ({user}) => {
  return (
  <>
  <h2>Navbar</h2>
  <UserProfile user={user} />
  </>
  )
}

export default Navbar