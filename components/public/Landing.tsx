import React from 'react'
import Link from 'next/link'
import { conceptModalNewton, conceptModalSecant } from '@/helpers/modals'


// const metodos = [
//     {
//         nombre: 'Método Secante',
//         descripcion: 'El método de la Secante es un método para encontrar los ceros de una función de forma iterativa. Este método está basado en la fórmula de Newton-Raphson',
//         link: 'secant'
//     },
//     {
//         nombre: 'Método Newton Raphson',
//         descripcion: 'El método de Newton Raphson es un procedimiento algorítmico que permite hallar raíces de funciones, conocido un valor numérico cercano a la raíz.',
//         link: 'newton'
//     }
// ]


export const Landing = () => {
    return (
        <>
            <section className="bg-gray-100">

                <div className=" text-black p-6 justify-center items-center flex flex-col">
                    <h1 className="text-5xl font-bold mb-5 mt-10">Métodos de Búsqueda de Raíces</h1>
                    <p className="text-xl">Explore el método de la Secante y el método de Newton-Raphson</p>
                </div>

                <div className="container mx-auto flex justify-center items-center min-h-[72vh]">
                    <div className="grid grid-cols-2 w-[95%] gap-[25px]">
                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-3xl font-semibold mb-4">Método Secante</h2>
                            <p className="text-lg">El método de la secante es una técnica numérica para encontrar la raíz de una función de valor real. Es un método iterativo que utiliza una secuencia de aproximaciones a la raíz.</p>
                            <p className="mt-4 text-lg">La fórmula para la iteración del método de la secante es:</p>
                            <pre className="bg-gray-800 text-white p-2 rounded mt-2 text-lg">
                                x[n+1] = x[n] - f(x[n]) * (x[n] - x[n-1]) / (f(x[n]) - f(x[n-1]))
                            </pre>
                            <div className="inline-block bg-purple-900 hover:bg-purple-800 text-white rounded-md py-4 px-7 font-medium duration-300 items-center gap-2 mt-10">
                                <button type='button' onClick={conceptModalSecant}> Leer Más... </button>
                            </div>
                            <div className="inline-block bg-gray-800 hover:bg-gray-700 text-white rounded-md py-4 px-7 font-medium duration-300 items-center ml-4">
                                <Link href={"/app/secant"}>Utilizar Método</Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded shadow">
                            <h2 className="text-3xl font-semibold mb-4">Método de Newton-Raphson</h2>
                            <p className="text-lg">El Método Newton-Raphson es otra técnica iterativa de búsqueda de raíces. Utiliza la derivada de la función para hacer aproximaciones convergentes rápidas a la raíz.</p><br></br>
                            <p className="mt-4 text-lg">La fórmula de iteración de Newton-Raphson es:</p>
                            <pre className="bg-gray-800 text-white p-2 rounded mt-2 text-lg">
                                x[n+1] = x[n] - f(x[n]) / f′(x[n])
                            </pre>
                            <div className="inline-block bg-purple-900 hover:bg-purple-800 text-white rounded-md py-4 px-7 font-medium duration-300 items-center gap-2 mt-10">
                                <button type='button' onClick={conceptModalNewton}> Leer Más... </button>
                            </div>
                            <div className="inline-block bg-gray-800 hover:bg-gray-700 text-white rounded-md py-4 px-7 font-medium duration-300 items-center ml-4">
                                <Link href={"/app/newton"}>Utilizar Método</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
