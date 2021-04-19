import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";

export default function Part4() {
    const { prevStep, nextStep, userData, setUserData } = useContext(ContextProvider);
    const interestValues = ["Outdoors", "Fitness", "Health", "Travel", "Theme parks", "Cooking", "Sports", "Adventure", "Music", "Fashion", "Technology", "Architecture", "Writing", "Gaming", "Dining", "History", "Theatre", "Networking", "Art", "Politics", "Fishing", "Meet people", "Podcasts", "Gambling", "Self improvement", "Foreign languages", "Movies", "Celebrities", "Dating", "Social media", "Photography"];
    return (

        <div class="pills">
            <h2 className="my-3">What are your interests?</h2>
                {interestValues.map((interestValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={interestValue} name="interest" value={interestValue} onChange={(e)=>setUserData({...userData, "interests" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={interestValue}>{interestValue}</label>
                    </div>
                    
                ))}
        
            <br/>
            <button className="border border-black rounded-full px-10 py-5 my-10 mr-5" onClick={prevStep}>Back</button>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
