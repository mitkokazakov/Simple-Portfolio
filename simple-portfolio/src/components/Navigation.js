import React from 'react'

function Navigation() {
    return (
        
        <div className="flex p-10 justify-between items-center transition-all duration-500 dark:bg-sky-900">
            <p className="font-bold tracking-widest dark:text-white">NordDevelopers</p>

            <div className="flex justify-center gap-8 items-center mr-20">
                <i className="fa-solid fa-moon text-3xl dark:text-white cursor-pointer" onClick={() => setDarkMode(!darkMode)}></i>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1 rounded-md text-white">Resume</button>
            </div>
        </div>
    )
}

export default Navigation