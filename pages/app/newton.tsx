import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/app/NavBar'
import { NewtonForm } from '@/components/public/nextonForm'

const Newton = () => {
    const { setLoading } = useContext(AppContext)
    const { isLogged } = useContext(SessionContext)
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
                <title>Método Newton Raphson</title>
            </Head>
            <NavBar />

            <NewtonForm/>
           
        </>
    )
}

export default Newton