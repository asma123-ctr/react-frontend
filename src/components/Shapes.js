import React from 'react'
import redA from '../assets/red-A.png'
import yellowA from '../assets/yellow-A.png'
import yellowb from '../assets/yellow-b.png'
import pinkb from '../assets/pink-b.png'

export default function Shapes() {
    return (
        <div className="shapes">
            <div className="red-A fixed shape hidden md:block slide-down p-5 m-5">
                <img src={redA} className="h-64" />
            </div>
            <div className="yellow-A  fixed shape hidden md:block slide-side p-5 m-5">
                <img src={yellowA} className="h-64" />
            </div>
            <div className="red-A fixed shape md:hidden mobile-top p-5 m-5">
                <img src={redA} className="h-64" />
            </div>
            <div className="yellow-A  fixed shape md:hidden mobile-bottom p-5 m-5">
                <img src={yellowA} className="h-64" />
            </div>
            <div className="fixed shape small-move p-5 m-5">
                <img src={yellowb} className="h-10" />
            </div>
            <div className="fixed shape hidden md:block animate-pulse p-5 m-5"
                style={{
                    top:"60%",
                    right: "20%"
                }}>
                <img src={yellowb} className="h-10" />
            </div>
            <div className="fixed shape hidden md:block animate-pulse p-5 m-5"
                style={{
                    top:"70%",
                    right: "50%"
                }}>
                <img src={pinkb} className="h-10" />
            </div>
            <div className="fixed shape hidden md:block animate-pulse p-5 m-5"
                style={{
                    top:"80%",
                    right: "10%"
                }}>
                <img src={pinkb} className="h-10" />
            </div>
        </div>
    )
}
