import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../../Global/Context";

export default function Part1() {
    const { nextStep, userData, setUserData } = useContext(ContextProvider);
    const periodValues = ["📅 Upto 3 months", "📅 3 to 6 months", "📅 6 to 12 months", "📅 +12 months", "📅 +3 years"];

    return (

        <div class="pills">
            <h2 className="my-3">Have you ever visited Dubai?</h2>
                <input  type="radio" id="visitedyes" name="visited" value="👍 yes" onChange={(e)=>setUserData({...userData, "visited" : e.target.value})}/>
                <label className="rounded-full px-8 py-3 my-2 mr-5" for="visitedyes">👍 Yes</label>

                <input type="radio" id="visitedno" name="visited" value="👎 no" onChange={(e)=>setUserData({...userData, "visited" : e.target.value})} />
                <label className="rounded-full px-8 py-3 my-2 mr-5" for="visitedno">👎 No</label>

            <h2 className="my-3">Do you have any friends or family in Dubai?</h2>
                <input  type="radio" id="familyyes" name="family" value="👍 yes" onChange={(e)=>setUserData({...userData, "family" : e.target.value})}/>
                <label className="rounded-full px-8 py-3 my-2 mr-5" for="familyyes">👍 Yes</label>

                <input type="radio" id="familyno" name="family" value="👎 no" onChange={(e)=>setUserData({...userData, "family" : e.target.value})} />
                <label className="rounded-full px-8 py-3 my-2 mr-5" for="familyno">👎 No</label>

            <h2 className="my-3">How long do you want to stay in Dubai?</h2>
                {periodValues.map((periodValue, index) => (
                    <div className="items-center inline-flex">
                        <input type="radio" id={periodValue} name="period" value={periodValue} onChange={(e)=>setUserData({...userData, "period" : e.target.value})} />
                        <label className="rounded-full px-8 py-3 my-2 mr-5" for={periodValue}>{periodValue}</label>
                    </div>
                    
                ))}

            <br/>
            <NavLink to="/" className="border border-black rounded-full px-10 py-5 my-10 mr-5">Back</NavLink>
            <button className="text-white main-gradient rounded-full px-10 py-5 my-10 mr-5" onClick={nextStep}>Next</button>
        </div>

    )
}
