import React from 'react'

import codeImg from '../images/code.png'
import designImg from '../images/design.png'
import consultingImg from '../images/consulting.png'

function Services() {
    return (

        <div className="mt-10 px-16 pb-3">

            <h1 className="text-left text-3xl py-4 dark:text-white">Services I offer</h1>

            <p className="text-left dark:text-white"> Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talanted people to create digital products for both business and consumer use.</p>

            <p className="py-5 text-left dark:text-white">I offer from a wide range of services, including brand design, programming and teaching.</p>

            <div className=" flex justify-center gap-5 pt-4">

                <div className="px-7 py-5 text-center rounded-xl bg-sky-950">
                    <img className="mx-auto w-32 h-32" src={codeImg}></img>

                    <h3 className="text-white font-medium py-4">API's</h3>

                    <p className="text-white pb-5 font-medium">Creating complicated and elegant API's with authorization and authenticaion.</p>

                    <p className="text-teal-500 font-medium pb-5">Design Tools I Use</p>

                    <div>
                        <p className="text-white py-2">C#</p>
                        <p className="text-white py-2">ASP.Net</p>
                        <p className="text-white py-2">Visual Studio</p>
                        <p className="text-white py-2">Stripe</p>
                        <p className="text-white py-2">EF Core</p>
                    </div>
                </div>

                <div className="px-7 py-5 text-center rounded-xl bg-sky-950">
                    <img className="mx-auto w-32 h-32" src={designImg}></img>

                    <h3 className="text-white font-medium py-4">API's</h3>

                    <p className="text-white pb-5 font-medium">Creating complicated and elegant API's with authorization and authenticaion.</p>

                    <p className="text-teal-500 font-medium pb-5">Design Tools I Use</p>

                    <div>
                        <p className="text-white py-2">C#</p>
                        <p className="text-white py-2">ASP.Net</p>
                        <p className="text-white py-2">Visual Studio</p>
                        <p className="text-white py-2">Stripe</p>
                        <p className="text-white py-2">EF Core</p>
                    </div>
                </div>

                <div className="px-7 py-5 text-center rounded-xl bg-sky-950">
                    <img className="mx-auto w-32 h-32" src={consultingImg}></img>

                    <h3 className="text-white font-medium py-4">API's</h3>

                    <p className="text-white pb-5 font-medium">Creating complicated and elegant API's with authorization and authenticaion.</p>

                    <p className="text-teal-500 font-medium pb-5">Design Tools I Use</p>

                    <div>
                        <p className="text-white py-2">C#</p>
                        <p className="text-white py-2">ASP.Net</p>
                        <p className="text-white py-2">Visual Studio</p>
                        <p className="text-white py-2">Stripe</p>
                        <p className="text-white py-2">EF Core</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Services