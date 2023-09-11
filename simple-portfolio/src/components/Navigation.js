import React from 'react'

function Navigation({darkModeHandling}) {
    return (
        
        <div className="flex justify-between px-5 py-5 gap-5 md:px-20 items-center transition-all duration-500 dark:bg-sky-900 ">
            <p className="font-bold tracking-widest dark:text-white">NordDevelopers</p>

            <div className="flex justify-center gap-8 items-center mr-2 md:mr-10 md:gap-16">
                <i className="fa-solid fa-moon text-3xl text-sky-900 dark:text-white cursor-pointer" onClick={darkModeHandling}></i>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1 rounded-md text-white">Resume</button>
            </div>
        </div>
    )
}

export default Navigation