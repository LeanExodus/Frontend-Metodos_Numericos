import { AppContext } from '@/components/context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { errorModal } from '@/helpers/modals'
import { NavBar } from '@/components/app/NavBar'
import Head from 'next/head'
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
                <title>Método Secante</title>
            </Head>
            <NavBar />

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Método Secante</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="function" className="block text-sm font-medium leading-6 text-gray-900 ">Función</label>
                            <div className="mt-2">
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='x^3+4*x^2-10' name='function' id='function' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="xa" className="block text-sm font-medium leading-6 text-gray-900">Primer punto</label>
                            <div className="mt-2">
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='X' name='xa' id='xa' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="xb" className="block text-sm font-medium leading-6 text-gray-900">Segundo punto</label>
                            <div className="mt-2">
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='Y' name='xb' id='xb' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tolerance" className="block text-sm font-medium leading-6 text-gray-900">Tolerancia</label>
                            <div className="mt-2">
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='%' name='tolerance' id='tolerance' />
                            </div>
                        </div>

                        <button type='submit' className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'> Calcular</button>
                    </form>

                    {
                        (rows != null && rows.length > 0)
                        && (
                            <div className=" py-8 w-full">
                                
                                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                                
                                    <table className="min-w-full bg-white">
                                        <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Iteración</th>
                                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Resultado</th>

                                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Error</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                        {rows.map((row) => <tr key={row.iteration}>
                                        
                                            <td className="w-1/3 text-left py-3 px-4">{row.iteration}</td>
                                            <td className="w-1/3 text-left py-3 px-4">{parseFloat(row.result).toFixed(4)}</td>
                                            <td className="w-1/3 text-left py-3 px-4">{parseFloat(row.error).toFixed(2)}{'%'}</td>

                                        </tr>)}
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
          
                    
        </>
            
    )
}

export default App