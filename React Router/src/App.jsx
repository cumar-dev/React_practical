import React from 'react'
import NavLinks from './Components/NavLinks'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavLinks />
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default App