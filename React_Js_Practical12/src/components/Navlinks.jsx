import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth,_Context'
const Navlinks = () => {
    const {isAuthanticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = ()=> {
        logout();
        navigate('/login');
    }
  return (
    <div className='bg-gray-50'>
        <header className='bg-white shadow-md p-5'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-bold text-gray-800 text-3xl'>My logo</h1>
                    </div>
                    <nav className='flex items-center gap-5'>
                        <NavLink to="/" className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Home</NavLink>
                         <NavLink to="/login" className={({isActive}) => isActive ? "font-bold" : undefined}>Login</NavLink>
                          {
                            isAuthanticated && (
                       <>
                        <NavLink to="/courses" className={({isActive}) => isActive ? "font-bold" : undefined}>Courses</NavLink>
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "font-bold" : undefined}>Dashboard</NavLink>
                       <button onClick={handleLogOut} className='bg-red-800 text-white py-2 px-3 rounded'>LogOut</button>
                       </>
                            )
                          }
                       </nav>
                </div>
                {/* <Outlet /> */}
            </div>
        </header>
    </div>
  )
}

export default Navlinks;