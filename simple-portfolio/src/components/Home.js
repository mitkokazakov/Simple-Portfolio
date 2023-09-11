import React from 'react'

import devImage from '../images/dev-ed-wave.png'

function Home() {
    return (
        <div className="text-center py-10 px-10">

            <h1 className="text-5xl py-2 text-teal-600 font-medium tracking-widest">Gunar Vikstrom</h1>

            <h3 className="py-3 text-2xl font-medium dark:text-white">Back End Developer</h3>

            <p className="w-80 mx-auto text-center py-3 leading-7 font-medium text-gray-600 dark:text-white">Freelancer providing services for programming content needs. Join me down below and let's get cracking.</p>

            <div className="mt-3 mb-24 flex justify-center gap-16 text-gray-500 dark:text-white">
                <i className="fa-brands fa-linkedin text-4xl px-4"></i>
                <i className="fa-brands fa-square-twitter text-4xl px-4"></i>
                <i className="fa-brands fa-square-instagram text-4xl px-4"></i>
            </div>

            <div className="mx-auto rounded-full w-80 h-80  bg-gradient-to-b from-teal-500 overflow-hidden ">
                <img className="object-cover h-full w-full" src={devImage}></img>
            </div>

        </div>
    )
}

export default Home