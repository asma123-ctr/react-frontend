import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part3() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const whenValues = ["📅 Right now", "📅 0 to 3 months", "📅3 to 6 months", "📅 6 to 12 months", "📅 After 1 year", "📅 I'm not sure"];
    return (

        <div class="pills">
            <h2 className="my-3">How soon do you want to come to Dubai?</h2>
                {whenValues.map((whenValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={whenValue} name="industry" value={whenValue} onChange={(e)=>setUserData({...userData, "when" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={whenValue}>{whenValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
