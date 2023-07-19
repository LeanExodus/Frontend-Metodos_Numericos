import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import { SessionContext } from '../context/sessionContext'
import { AppContext } from '../context/appContext'
import axios from 'axios'
import { errorModal, successModal } from '@/helpers/modals'
import { useRouter } from 'next/router'
export const LoginForm = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const { logIn } = useContext(SessionContext)
    const { setLoading } = useContext(AppContext)
    const router = useRouter()
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const username = form?.current?.username.value
        const password = form?.current?.password.value
        setLoading(true)
        try {

            const resp = await axios.post("https://metodos-numericos.onrender.com/login", {
                grant_type: '',
                username,
                password,
                scope: '',
                client_id: '',
                client_secret: ''
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if (resp.status == 200) {
                logIn(resp.data.access_token)
                successModal("Ingreso correcto")

                router.push('/app')
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                errorModal('Credenciales invalidas')

            }
        }
        setLoading(false)
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Ingresar</h2>
            </div>
            
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" ref={form} onSubmit={handleSubmit} >

                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
                    <div className="mt-2">
                        <input id='username' required type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[13px]" name="username" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    <div className="mt-2">
                        <input id='password' required type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[13px]" name="password" />
                    </div>
                </div>

                    
                    
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
                    <p className="mt-10 text-center text-sm text-gray-500">No has creado un usuario? <Link className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500' href={"register"}>Registrate</Link></p>
                </form>
            </div>
        </div>
    )
}
