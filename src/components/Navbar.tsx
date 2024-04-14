import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[75px] bg-[#ffffff] flex justify-between items-center px-4'>
        <div>
            <a href="/">
                <img src={Logo} alt="Logo" style={{width:"90px"}} />
            </a>
        </div>
        <div>
            <ul className='flex'>
                <li className='mr-2'>FirstPage</li>
                <li className='mr-2'>SecondPage</li>
                <li className='mr-2'>ThirdPage</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar