import React from 'react'

import web1 from '../images/web1.png'
import web2 from '../images/web2.png'
import web3 from '../images/web3.png'
import web4 from '../images/web4.png'
import web5 from '../images/web5.png'
import web6 from '../images/web6.png'

function WebSites() {
    return (

        <div className='px-6 pt-10 md:px-16'>

            <h3 className='text-3xl text-center dark:text-white md:text-left'>Portfolio</h3>

            <p className='text-center pt-5 dark:text-white md:text-left'>
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
            </p>

            <p className='text-center py-5 dark:text-white md:text-left'>I offer from a wide range of services, including brand design,
                programming and teaching.</p>

            <div className='flex flex-col gap-10 pb-10 flex-wrap md:flex-row'>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web1}></img>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web2}></img>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web3}></img>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web4}></img>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web5}></img>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img className='w-full h-full rounded-lg' src={web6}></img>
                </div>
            </div>

        </div>
    )
}

export default WebSites