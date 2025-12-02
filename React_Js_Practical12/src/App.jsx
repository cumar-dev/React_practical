import React from 'react'
import Navlinks from './components/Navlinks';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
   <>
   <Navlinks />
   <div className='mt-6'>
    <Outlet />
   </div>
   </>
  )
}

export default App;