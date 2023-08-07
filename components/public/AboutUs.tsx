import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const AboutUs = () => {
    return (
        <section className="bg-gray-100">
            <div className="py-10 justify-center items-center flex flex-col bg-gray-900 text-white">
                <h1 className="text-5xl font-bold mb-5 mt-10">¡Acerca de Nosotros!</h1>
                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="p-6 bg-white rounded shadow">
                    <SectionHeading title="Lorem ipsum" />
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <SectionHeading title="Lorem ipsum" />
                    <PersonCard name="John Doe" role="Co-founder & CEO" imageUrl="/images/persona1.jpg" />
                    <PersonCard name="Jane Smith" role="Co-founder & CTO" imageUrl="/images/persona2.jpg" />
                </div>
            </div>
            <div className="container mx-auto mt-8 p-6 bg-white rounded shadow">
                <SectionHeading title="Lorem ipsum" />
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="container mx-auto mt-8 p-6 bg-white rounded shadow">
                <SectionHeading title="Lorem ipsum" />
                <ul className="list-disc list-inside text-gray-600">
                    <li>Lorem ipsum: dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum: dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum: dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum: dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
        </section>
    );
};

const PersonCard = ({ name, role, imageUrl }) => {
    return (
        <div className="flex items-center mt-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={64}
                    height={64}
                    layout="responsive"
                />
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    );
};

const SectionHeading = ({ title }) => {
    return (
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    );
};