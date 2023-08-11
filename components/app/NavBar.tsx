import Link from 'next/link'
import React, { useContext } from 'react'
import { SessionContext } from '../context/sessionContext'

export const NavBar = () => {
    const { logOut } = useContext(SessionContext);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-start">
                        <Link href="/app" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Inicio</Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center space-x-4">
                            <Link href="/app/newton" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Newton</Link>
                            <div className="border-r-2 border-white h-6"></div>
                            <Link href="/app/secant" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Secante</Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <Link href="/app/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium pr-3">Nosotros</Link>
                        <div className="border-r-2 border-white h-6"></div>
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => { logOut() }}>Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
