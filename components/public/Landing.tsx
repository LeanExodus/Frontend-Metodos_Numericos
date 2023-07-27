import React from 'react'
import Link from 'next/link'


const metodos = [
    {
        nombre : 'Método Secante',
        descripcion: 'El método de la Secante es un método para encontrar los ceros de una función de forma iterativa. Este método está basado en la fórmula de Newton-Raphson',
        link: 'secant'
    },
    {
        nombre : 'Método Newton Raphson',
        descripcion: 'El método de Newton Raphson es un procedimiento algorítmico que permite hallar raíces de funciones, conocido un valor numérico cercano a la raíz.',
        link: 'newton'
    }
]


export const Landing = () => {
    return (
        <>
        <div className="bg-white py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
               
                
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {metodos.map((metodo) => (
                    <div key={metodo.nombre} className="relative pl-16">
                        <div className="mx-auto left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"></div>
                        <dt className="text-base font-semibold leading-10 text-gray-900 pt-5 text-4xl">
                          
                            {metodo.nombre}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">{metodo.descripcion}</dd>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' href={"/app/" + metodo.link}>Ir al método</Link>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Leer más <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    ))}

                    
                </dl>
                </div>
            </div>
        </div>
        </>
    )
}
