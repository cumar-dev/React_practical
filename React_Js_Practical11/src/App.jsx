import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router';
import NavLinks from './Components/NavLinks';

const App = () => {
  const [pageVisited, setPageVisited] = useState(0);
  const location = useLocation();
  useEffect(()=> {
    setPageVisited(prev => prev + 1);
  }, [location]);
  return (
    <>
    <h1>React Router</h1>
    <div>
      <nav className='space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contect">Contect</Link>
      </nav>
      <span>Page visit: {pageVisited}</span>
    </div>
    <NavLinks />
    
    <main className='p-6'>
    <Outlet />
    </main>
    
    
    </>
  )
}

export default App;