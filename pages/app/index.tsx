import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { errorModal } from '@/helpers/modals'
import { NavBar } from '@/components/app/NavBar'
import Head from 'next/head'
import { Landing } from '@/components/public/Landing'
const App = () => {
    const { setLoading } = useContext(AppContext)
    const { isLogged, jwt } = useContext(SessionContext)
    const router = useRouter()
    const form = useRef<HTMLFormElement | null>(null)
    const [rows, setRows] = useState<Row[]>([])
    useEffect(() => {
        setLoading(true)
        if (!isLogged) {
            router.push('/')
        }

        setLoading(false)
    }, [isLogged, router, setLoading])
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const func = form?.current?.function.value
        const xa = form?.current?.xa.value
        const xb = form?.current?.xb.value
        const tolerance = form?.current?.tolerance.value

        setLoading(true)
        setRows([])
        try {
            const resp = await axios.post("https://metodos-numericos.onrender.com/secant", {
                func: func,
                xa: xa,
                xb: xb,
                tolerance: tolerance,
            }, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${jwt}`,
                }
            })

            if (resp.status == 200) {
                setRows(resp.data)
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                errorModal('Error al realizar cálculo')

            }
        }
        setLoading(false)
    }

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