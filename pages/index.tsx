import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { LoginForm } from '@/components/public/LoginForm'
import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useContext, useEffect} from 'react'

const Index = () => {
     const { setLoading } = useContext(AppContext)
    const { isLogged } = useContext(SessionContext)

    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        if (isLogged) {
            router.push('/app')
        }

        setLoading(false)
    }, [isLogged, router, setLoading])

   
    return (
        <>
        <Head>
            <title>Iniciar sesión</title>
        </Head>
        
        <main className="h-screen grid content-center">
            <div className="">
           
                <div className="">
                    <LoginForm />
                </div>
            </div>
        </main>
        </>
    )
}

export default Index