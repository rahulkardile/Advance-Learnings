import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='flex items-center p-4 justify-between'>
                <h2 className='font-semibold text-xl ml-5'>ChatApp</h2>
                <nav className="flex gap-6 px-7">
                    <Link className='font-semibold text-xs hover:underline duration-300' to={"/"}>Home</Link>
                    <Link className='font-semibold text-xs hover:underline duration-300' to={"/about"}>About</Link>
                    <Link className='font-semibold text-xs hover:underline duration-300' to={"/users"}>Users</Link>
                </nav>
            </header>
            <hr className='w-4/5 m-auto mb-4' />
        </>
    )
}

export default Header