import React from 'react'
import Link from 'next/link'
import { conceptModalNewton, conceptModalSecant } from '@/helpers/modals'

export const Landing = () => {
    return (
        <>
            <section className="bg-gray-100" id="metodos">
                <div className="py-10 justify-center items-center flex flex-col bg-gray-900 text-white">
                    <h1 className="text-5xl font-bold mb-5 mt-10">¡Métodos de Búsqueda de Raíces!</h1>
                    <p className="text-xl">Explore el método de la Secante y el método de Newton-Raphson</p>
                </div>
                <div className="container mx-auto flex justify-center items-center min-h-[72vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] gap-8 md:gap-12">
                        <MethodCard
                            title="Método de Newton-Raphson"
                            description="El Método Newton-Raphson es otra técnica iterativa de búsqueda de raíces. Utiliza la derivada de la función para hacer aproximaciones convergentes rápidas a la raíz."
                            formula="x[n+1] = x[n] - f(x[n]) / f′(x[n])"
                            link="/app/newton"
                            buttonText="Utilizar Método"
                            onClick={conceptModalNewton}
                        />
                        <MethodCard
                            title="Método Secante"
                            description="El método de la secante es una técnica numérica para encontrar la raíz de una función de valor real. Utiliza una secuencia de aproximaciones a la raíz."
                            formula="x[n+1] = x[n] - f(x[n]) * (x[n] - x[n-1]) / (f(x[n]) - f(x[n-1]))"
                            link="/app/secant"
                            buttonText="Utilizar Método"
                            onClick={conceptModalSecant}
                        />
                    </div>
                </div>
            </section>

            {/* Additional Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold mb-6 text-center">¿Qué Ofrecemos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Información Relevante"
                            description="Nuestra plataforma ofrece información relevante para facilitar el aprendizaje y manejo de los métodos de búsqueda de raíces como Secante y Newton-Raphson."
                            icon="fas fa-chalkboard"
                        />
                        <ServiceCard
                            title="Iteraciones Justas"
                            description="Contamos con un sistema inteligente que crea las interaciones justas y necesarias para dar solución."
                            icon="fas fa-headset"
                        />
                        <ServiceCard
                            title="Visualización Gráfica"
                            description="Contamos con un sistema conectado a Geogebra, para visualizar la función y los puntos con los que tiene contacto."
                            icon="fas fa-pencil-alt"
                        />
                    </div>
                </div>
            </section>

            {/* Another Additional Section */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-4">Únete a Nosotros en la Revolución del Aprendizaje</h2>
                    <p className="text-lg mb-8">Descubre cómo nuestros métodos de búsqueda de raíces pueden transformar tu comprensión de las matemáticas.</p>
                    <Link href="#metodos" className="inline-block bg-purple-900 hover:bg-purple-800 text-white py-3 px-8 rounded-md text-lg font-semibold transition duration-300" passHref>
                        ¡Métodos!
                    </Link>
                </div>
            </section>
        </>
    )
}

const MethodCard = ({ title, description, formula, link, buttonText, onClick }: any) => {
    return (
        <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
            <pre className="bg-gray-800 text-white p-2 rounded mt-4 text-lg">
                {formula}
            </pre>
            <div className="flex mt-8">
                <div className="bg-purple-900 hover:bg-purple-800 text-white rounded-md py-4 px-7 font-medium duration-300 flex items-center gap-2">
                    <button type="button" onClick={onClick}>Leer Más...</button>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 text-white rounded-md py-4 px-7 font-medium duration-300 flex items-center ml-4">
                    <Link href={link}>{buttonText}</Link>
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ title, description, icon }: any) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center shadow transform hover:scale-105 transition duration-300 even:bg-gray-300">
            <div className="text-3xl mb-4">
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

