import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part4() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const educationValues = ["📃 Highschool or less", "📒 College", "📕 Diploma", "📚 Bachelors"];
    return (

        <div class="pills">
            <h2 className="my-3">What is your level of education?</h2>
                {educationValues.map((educationValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={educationValue} name="education" value={educationValue} onChange={(e)=>setUserData({...userData, "education" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={educationValue}>{educationValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
