import React from 'react'
import Logo from "../assets/Logo.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[75px] bg-[#ffffff] flex justify-between items-center px-4'>
        <div>
            <Link to="/FirstPage">
                <img src={Logo} alt="Logo" style={{width:"90px"}} className='mt-3'/>
            </Link>
        </div>
        <div>
            <ul className='flex'>
                <NavLink to="/FirstPage" className='mr-2'>FirstPage</NavLink>
                <NavLink to="/SecondPage" className='mr-2'>SecondPage</NavLink>
                <NavLink to="/ThirdPage" className='mr-2'>ThirdPage</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar