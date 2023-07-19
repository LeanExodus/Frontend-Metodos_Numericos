import Link from 'next/link'
import React, { useContext } from 'react'
import { SessionContext } from '../context/sessionContext'

export const NavBar = () => {
    const { logOut } = useContext(SessionContext)
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                
                        
                            <div className="flex space-x-4">
                                <Link className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' href={"/app/newton"}>Newton</Link>
                                <Link className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' href={"/app"}>Secante</Link>
                                <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={() => { logOut() }}>Salir</button>
                            </div>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}
