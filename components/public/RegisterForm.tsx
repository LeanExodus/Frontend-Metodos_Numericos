import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/appContext'
import { errorModal, successModal } from '@/helpers/modals'
import { useRouter } from 'next/router'
import axios from 'axios'

export const RegisterForm = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const { setLoading } = useContext(AppContext)
    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const username = form?.current?.username.value
        const password = form?.current?.password.value
        setLoading(true)
        try {

            const resp = await axios.post("https://metodos-numericos.onrender.com/users", { username, password })
            if (resp.status == 200) {
                successModal("Usuario registrado correctamente")
                router.push('/')
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {

                errorModal('El usuario ya existe')

            }
        }
        setLoading(false)

    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registrar Usuario</h2>
            </div>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" ref={form} onSubmit={handleSubmit} >

                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
                    <div className="mt-2">
                    <input required minLength={4} type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[13px]" placeholder="Mínimo 4 caracteres" name="username" id='username'/>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    <div className="mt-2">
                    <input required minLength={8} type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[13px]" placeholder="Mínimo 8 caracteres" name="password" id='password'/>
                    </div>
                </div>

                    
                    
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrar</button>
                <p className='mt-10 text-center text-sm text-gray-500'>Ya tienes un usuario? <Link className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500' href={"/"}>Inicia Sesión</Link></p>
                </form>
            </div>

            
              
                
                
                
                
           
        </div>
    )
}
