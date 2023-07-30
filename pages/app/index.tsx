import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

import { NavBar } from '@/components/app/NavBar'
import Head from 'next/head'
import { Landing } from '@/components/public/Landing'
const App = () => {
    const { setLoading } = useContext(AppContext)
    const { isLogged} = useContext(SessionContext)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        if (!isLogged) {
            router.push('/')
        }

        setLoading(false)
    }, [isLogged, router, setLoading])
    
    return (
        <>

            <Head>
                <title>Inicio</title>
            </Head>
            <NavBar />
           
            <Landing/>

             
        </>
            
    )
}

export default App