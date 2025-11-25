import React from 'react'
import { NavLink, Outlet } from 'react-router'
const NavLinks = () => {
  return (
    <>
   <div className='min-h-screen bg-gray-100 text-gray-900 '>
        <header className='bg-rose-500 text-white p-4 text-center'>
          <h1 className='text-2xl font-bold'>My Logo</h1>
        </header>

        <nav className='flex justify-center gap-6 bg-white py-4 shadow-md'>
          <NavLink className={({isActive}) => isActive ? "font-bold underline" : undefined} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "font-bold underline" : undefined} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "font-bold underline" : undefined} to="/Contect">Contect</NavLink>
        </nav>

        <Outlet />
      </div>
    </>
  )
}

export default NavLinks;