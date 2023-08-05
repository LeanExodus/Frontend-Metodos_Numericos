import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '../context/appContext'
import { SessionContext } from '@/components/context/sessionContext'
import { errorModal, guideModal } from '@/helpers/modals'
import axios from 'axios'
import Geogebra from 'react-geogebra'

export const NewtonForm = () => {
    const { setLoading } = useContext(AppContext)
    const { jwt } = useContext(SessionContext)
    const form = useRef<HTMLFormElement | null>(null)
    const [rows, setRows] = useState<Row[]>([])
    const [func, setFunc] = useState("")
    const [x, setX] = useState("")
    const [xa, setXa] = useState("")
    const [xb, setXb] = useState("")
    const [tolerance, setTolerance] = useState("")
    const [funcopy, setFuncopy] = useState("")
    const [tolerancecopy, setToleranceCopy] = useState("")
    const [showGroup1, setShowGroup1] = useState(true);
    const [showGroup2, setShowGroup2] = useState(false);
    
    const [geogebraReady, setGeogebraReady] = useState<boolean>(false)

    const geogebraReadyHandler = () => {
        setGeogebraReady(true);
      };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const func = form?.current?.function.value
        if (showGroup1) {
            const x = form?.current?.x.value
        }
        else if (showGroup2){
            const xa = form?.current?.xa.value
            const xb = form?.current?.xb.value
        }
        const tolerance = form?.current?.tolerance.value
      
        
        

        setLoading(true)
        setRows([])
        try {
            const resp = await axios.post("https://metodos-numericos.onrender.com/newton", {
                func: func,
                x: x,
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

                if (geogebraReady === true) {
                    const app = window.ggbApplet
                    app.evalCommand(`f(x)=${func}`)
                  }
                setFuncopy(func)
                setToleranceCopy(tolerance)
                setFunc("")
                setX("")
                setXa("")
                setXb("")
                setTolerance("")
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                errorModal(error.response?.data.detail)

                if (geogebraReady === true) {
                    const app = window.ggbApplet
                    app.reset()
                  }
            }
        }
        setLoading(false)
    }

    return (
        <>
            <div className="flex flex-col min-h-full justify-center px-6 py-12 lg:px-10 ">
                
                
                <div className="mt-4 mb-8 bg-gray-800 text-white rounded-md text-center">
                    <h2 className="p-2 uppercase font-semibold ">Método Newton Raphson</h2>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <form ref={form} onSubmit={handleSubmit} className='space-y-5 h-32 rounded '>
                        <div>
                            <div className="bg-gray-800 text-white rounded-md text-center "> 
                                <h1 className="py-2 uppercase  font-semibold ">Función</h1>
                            </div>
                            
                            <div className="mt-1">
                                <input type='text' required className='block w-full border-0 py-1.5 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='-x^3+3*x^2+2*x-5' name='function' id='function' value={func} onChange={(e)=>{setFunc(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 w-full">
                            <button
                                type='button'
                                className={`inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative w-full uppercase  font-semibold${
                                    showGroup1 ? 'inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-zinc-200 hover:text-zinc-50 shadow-sm focus:relative w-full uppercase  font-semibold' : ''
                                }`}
                                onClick={() => {
                                    setShowGroup1(true);
                                    setShowGroup2(false);
                                    setXa("")
                                    setXb("")
                                }}
                                >
                                Valor Inicial
                            </button>
                            <button
                                type='button'
                                className={`inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative w-full uppercase  font-semibold${
                                    showGroup2 ? 'inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-zinc-200 hover:text-zinc-50 shadow-sm focus:relative w-full uppercase  font-semibold' : ''
                                }`}
                                onClick={() => {
                                    setShowGroup1(false);
                                    setShowGroup2(true);
                                    setX("")
                                }}
                                >
                                Intervalo
                            </button>
                        </div>
                        
                        {showGroup1 && (
                        <div>
                            <div className="bg-gray-800 text-white rounded-md text-center "> 
                                <h1 className="py-2 uppercase font-semibold ">Valor Inicial</h1>
                            </div>
                           
                            <div className="mt-1">
                                <input type='text'  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='Punto medio' name='x' id='x' value={x} onChange={(e)=>{setX(e.target.value)}}/>
                            </div>
                        </div>
                        )}

                        {showGroup2 && (
                        <div>
                            <div className="bg-gray-800 text-white rounded-md text-center "> 
                                <h1 className="py-2 uppercase font-semibold ">Intervalo</h1>
                            </div>
                            <div className="mt-1 grid grid-cols-2 gap-4">
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='a' name='xa' id='xa' value={xa} onChange={(e)=>{setXa(e.target.value)}}/>
                                
                                <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='b' name='xb' id='xb' value={xb} onChange={(e)=>{setXb(e.target.value)}}/>
                            </div>
                        </div>
                        )}

                        <div>
                            <div className="bg-gray-800 text-white rounded-md text-center "> 
                                <h1 className="py-2 uppercase font-semibold ">Tolerancia</h1>
                            </div>
                            <div className="mt-1">
                                <input type='number' required inputMode="numeric" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 pl-[13px]' placeholder='%' name='tolerance' id='tolerance' value={tolerance} onChange={(e)=>{setTolerance(e.target.value)}}/>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <button type='button' onClick={guideModal} className='flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'> Guia</button>
                            <button type='submit' className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'> Calcular</button>
                       </div>
                    </form>
                    
                    <div className='h-32 lg:col-span-2 lg:mt-0 mt-80 lg:ml-12 sm:ml-0'>
                            <div className="bg-gray-800  rounded-md text-white text-center"> 
                                <h1 className='py-2 uppercase font-semibold'>Gráfico</h1>
                            </div>
                            <div className='mt-1'>
                                <Geogebra
                                id={''}
                                appName={'graphing'}
                                width={1130}
                                height={360}

                                showMenuBar={false}
                                showToolBar={false}
                                showAlgebraInput={false}
                                onReady={geogebraReadyHandler}
                                LoadComponent={() => <h1>Cargando...</h1>}  
                                appletOnLoad={function (): void {} }                          
                                />
                            </div>
                    </div>

                </div>
              
                        <div className="mt-80 text-center">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"> 
                                <div className="bg-gray-800 text-white rounded-md"> 
                                    <h1 className='py-2 uppercase font-semibold'>Derivada</h1>
                                    {
                                        (rows != null && rows.length > 0)
                                        && (
                                            <p className='mt-2 mb-2 font-semibold'>{rows[0].derivative}</p>
                                            )
                                    }
                                </div>
                                
                                <div className="bg-gray-800 text-white rounded-md"> 
                                    <h1 className='py-2 uppercase font-semibold'>Función</h1>
                                    <p className='mt-2 mb-2 font-semibold'>{funcopy}</p>
                                </div>
                                

                                <div className="bg-gray-800 text-white rounded-md"> 
                                    <h1 className='py-2 uppercase font-semibold'>Tolerancia</h1>
                                    <p className='mt-2 mb-2 font-semibold'>{tolerancecopy}</p>
                                </div>
                                
                            </div>
                            <div className="shadow overflow-hidden rounded border-b border-gray-200 mt-8">
                            
                                <table className="min-w-full bg-white text-center">
                                    <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="w-1/3  py-3 px-4 uppercase font-semibold text-sm">Iteración</th>
                                        <th className="w-1/3  py-3 px-4 uppercase font-semibold text-sm">Resultado</th>

                                        <th className="w-1/3  py-3 px-4 uppercase font-semibold text-sm">Error</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                    {
                                    (rows != null && rows.length > 0)
                                    && (
                                        rows.map((row) => <tr key={row.iteration}>
                                    
                                        <td className="w-1/3  py-3 px-4">{row.iteration}</td>
                                        <td className="w-1/3  py-3 px-4">{parseFloat(row.result)}</td>
                                        <td className="w-1/3  py-3 px-4">{parseFloat(row.error)}{'%'}</td>

                                    </tr>)
                                        )
                                    }
                                    
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                     
            </div>   
        </>
    )
}