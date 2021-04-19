import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part4() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const savingsValues = ["🪙 No savings", "💰 0 to 1000 AED", "💰 1000 to 5000 AED", "💰 5000 to 10,000 AED", "💰💰10,000 to 20,000 AED", "💰💰20,000 to 50,000 AED", "💰💰💰+50,000 AED"];
    return (

        <div class="pills">
            <h2 className="my-3">Do you have any financial savings?</h2>
                {savingsValues.map((savingsValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={savingsValue} name="savings" value={savingsValue} onChange={(e)=>setUserData({...userData, "savings" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={savingsValue}>{savingsValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
