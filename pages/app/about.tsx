import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/app/NavBar'
import { AboutUs } from '@/components/public/AboutUs'

const About = () => {
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
                <title>Nosotros</title>

            </Head>
            <NavBar />

            <AboutUs />

        </>
    )
}

export default About