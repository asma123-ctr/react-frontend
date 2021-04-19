import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part2() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const whyValues = ["🤩 Lifestyle", "👨‍🏭 Work opportunities", "📔 Education", "💰 Finance", "🛫 Tourism", "👪 Family","👔 Business", "🔒 Security", "🌦 The weather", "🤝 Meeting new people", "🏵 Culture"];

    return (

        <div class="pills">
            <h2 className="my-3">Why do you want to come to Dubai?</h2>
                {whyValues.map((whyValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={whyValue} name="why" value={whyValue} onChange={(e)=>setUserData({...userData, "why" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={whyValue}>{whyValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
