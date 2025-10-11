import React from 'react'
import Navbar from './Navbar'

const Header = ({user}) => {
  return (
    <>
    <h2>Header</h2>
   <Navbar user={user} />
   </>
  )
}

export default Header