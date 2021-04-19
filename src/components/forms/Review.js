import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";
import edit from "../../assets/edit.png";
import { NavLink } from "react-router-dom";

export default function Review() {
    const { prevStep, setStep, userData } = useContext(ContextProvider);
    return (
        <div>
            <h2 className="my-3">Complete - Review your application</h2>
            <div className="bg-tertiary p-5">
                <span className="text-purple-500">Basic Information <button className="ml-8 pt-5"><NavLink to="/"><img src={edit}/></NavLink></button></span>
                <br/> <br/>
                    <span>Name:</span> <span className="text-gray-500 md:mr-10">{userData["firstName"]} {userData["lastName"]}</span>
                    <br className="md:hidden"/>
                    <span >Date of Birth:</span> <span className="text-gray-500 md:mr-10">{userData["dob"]}</span>
                    <br className="md:hidden"/>
                    <span >Gender:</span> <span className="text-gray-500 md:mr-10">{userData["gender"]}</span>
                    <br className="md:hidden"/>
                    <span >Nationality:</span> <span className="text-gray-500 md:mr-10">{userData["nationality"]}</span>
                    
                    <br className=":hidden"/>
                    
                    <span >Country of Residence:</span> <span className="text-gray-500 md:mr-10">{userData["residence"]}</span>
                    <br className="md:hidden"/>
                    <span >Contact Number:</span> <span className="text-gray-500 md:mr-10">{userData["contact"]}</span>
                    <br className="md:hidden"/>
                    <span >Email:</span> <span className="text-gray-500 md:mr-10">{userData["email"]}</span>
                    <br/>
            </div>

            <div className="bg-tertiary mt-6 p-5">
                <span className="text-purple-500">Questionaire</span>
                    <ul>
                        <li>Have you ever visited Dubai? <button className="ml-8 pt-5" onClick={(e) => setStep(1)}><img src={edit}/></button> </li> 
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["visited"]}</span>
                        
                        <li>Do you have any friends or family in Dubai? <button className="ml-8 pt-5" onClick={(e) => setStep(1)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["family"]}</span>
                        
                        <li>How long do you want to stay in Dubai? <button className="ml-8 pt-5" onClick={(e) => setStep(1)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["period"]}</span>
                        
                        <li>Why do you want to come to Dubai? <button className="ml-8 pt-5" onClick={(e) => setStep(2)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["why"]}</span>
                        
                        <li>What industries would you prefer to work in? <button className="ml-8 pt-5" onClick={(e) => setStep(3)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["industries"]}</span>
                        
                        <li>What are your interests? <button className="ml-8 pt-5" onClick={(e) => setStep(4)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["interests"]}</span>
                        
                        <li>Do you have any financial savings? <button className="ml-8 pt-5" onClick={(e) => setStep(5)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["savings"]}</span>
                        
                        <li>What is your level of education? <button className="ml-8 pt-5" onClick={(e) => setStep(6)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["education"]}</span>
                        
                        <li>How soon do you want to come to Dubai? <button className="ml-8 pt-5" onClick={(e) => setStep(7)}><img src={edit}/></button> </li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{userData["when"]}</span>
                    </ul>
            </div>
            
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-5 py-5 my-10 mr-5" >Complete Application</button>
        </div>
    )
}
