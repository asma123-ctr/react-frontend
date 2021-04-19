import React from 'react'
import BasicForm from'./forms/BasicForm';
import Background from '../assets/bg.png'
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';

export default function Home() {
    return (
        <div className="flex w-full h-screen">
            <div className="w-6/12 min-h-screen hidden md:block bg-cover bg-no-repeat bg-left"
                style={{
                backgroundImage: `url(${Background})`,
            }}>
                <img src={top} className="fixed h-64 -z-10" alt=""
                style={{
                    top: "-25%",
                    right: "47%"
                }}/>
                <img src={bottom} className="fixed h-64 -z-10" alt=""
                style={{
                    bottom: "-30%",
                    right: "57%"
                }}/>

                
            </div>
                
            <div className="w-full md:w-6/12 m-auto">
                <div className="py-5 sm:block md:hidden">
                    <h1 className="text-4xl font-bold">digg</h1>
                </div>
                <h2 className="w-full md:text-center mx-auto">Apply now to work in Dubai</h2>
                <BasicForm />
            </div>

        </div>
    )
}
