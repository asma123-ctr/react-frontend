import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part3() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const industriesValues = ["Construction", "Hostpitality", "Real estate", "Tourism", "Manufacturing", "Technology", "Media", "Farming", "Fishing", "Education", "Public Services", "Administration", "Financial Services", "Legal", "Healthcare", "Government", "Medical", "Security", "Logistics", "Robotics", "Fashion", "Automotive", "Transportation", "Customer Support"];
    return (

        <div class="pills">
            <h2 className="my-3">What industry would you prefer to work in?</h2>
                {industriesValues.map((industriesValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={industriesValue} name="industry" value={industriesValue} onChange={(e)=>setUserData({...userData, "industries" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={industriesValue}>{industriesValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
