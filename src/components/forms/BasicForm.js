import React, { useContext } from 'react'
import { ContextProvider } from "../../Global/Context";
import { NavLink } from "react-router-dom";

export default function BasicForm() {
    const { userData, setUserData } = useContext(ContextProvider);
    return (
        <form class="max-w-xl mx-auto p-5">
            
            <div class="inline-block mt-3 w-full md:w-1/2 pr-3">
                <input class="w-full px-2 py-4 text-gray-700 bg-tertiary rounded" 
                    onChange={(e)=>setUserData({...userData, "firstName" : e.target.value})}
                    id="firstName" name="firstName" type="text" required placeholder="First Name" aria-label="firstName" 
                />
            </div>
            <div class="inline-block mt-3 w-full md:w-1/2 pr-3">
                <input class="w-full px-2 py-4 text-gray-700 bg-tertiary rounded" 
                    onChange={(e)=>setUserData({...userData, "lastName" : e.target.value})}
                    id="lastName"  name="lastName" type="text" required placeholder="Last Name" aria-label="lastName" 
                />
            </div>

            <div class="inline-block mt-4 w-full md:w-1/2 pr-3">
                <input class="w-full px-2 py-4 text-gray-700 bg-tertiary rounded" 
                    onChange={(e)=>setUserData({...userData, "dob" : e.target.value})}
                    id="dob" name="dob" type="Date" required placeholder="Date of birth" aria-label="DoB" 
                />
            </div>
            
            <div className="check-input inline-block w-full md:w-1/2 align-middle">
                <span>Gender</span> <br/>
                
                
                <input className="mr-2" 
                    onChange={(e)=>setUserData({...userData, "gender" : e.target.value})}
                    type="radio" id="genderM" name="gender" value="Male" 
                />
                <label className="mr-2"  for="genderM" >Male</label>

                <input className="mr-2" 
                    onChange={(e)=>setUserData({...userData, "gender" : e.target.value})}
                    type="radio" id="genderF" name="gender" value="Female"
                />
                <label className="mr-2" for="genderF">Female</label>

                <input className="mr-2" 
                    onChange={(e)=>setUserData({...userData, "gender" : e.target.value})}
                    type="radio" id="genderO" name="gender" value="Other"
                />
                <label className="mr-2" for="genderO">Other</label>
                
            </div>

            <div class="inline-block mt-4 w-full sm:w-full md:w-1/2 pr-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-state">
                    Nationality
                </label>
                <div class="relative">
                    <select 
                        onChange={(e)=>setUserData({...userData, "nationality" : e.target.value})}
                        class="block appearance-none w-full bg-tertiary border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nationality"
                    >
                        <option>Tunisian</option>
                        <option>American</option>
                        <option>Arab</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10s" viewBox="0 0 24.044 12.612">
                            <path id="Path_5" data-name="Path 5" d="M11.328.28a1,1,0,0,1,1.387,0l11.02,10.612a1,1,0,0,1-.694,1.72H1a1,1,0,0,1-.694-1.72Z" transform="translate(24.044 12.612) rotate(180)" fill="#141212" opacity="0.87"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="inline-block mt-4 w-full sm:w-full md:w-1/2 pr-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="residence">
                    Country of Residence
                </label>
                <div class="relative">
                    <select 
                        onChange={(e)=>setUserData({...userData, "residence" : e.target.value})}
                        class="block appearance-none w-full bg-tertiary border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                    >
                        <option>Tunisian</option>
                        <option>United Arab Emirates</option>
                        <option>London</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10s" viewBox="0 0 24.044 12.612">
                            <path id="Path_5" data-name="Path 5" d="M11.328.28a1,1,0,0,1,1.387,0l11.02,10.612a1,1,0,0,1-.694,1.72H1a1,1,0,0,1-.694-1.72Z" transform="translate(24.044 12.612) rotate(180)" fill="#141212" opacity="0.87"/>
                        </svg>
                    </div>
                </div>
            </div>


            <span class="mt-4 w-full inline-block">How we can contact you?</span>
            <div class="inline-block mt-3 w-full md:w-1/2 pr-3">
                <input class="w-full px-2 py-4 text-gray-700 bg-tertiary rounded" 
                onChange={(e)=>setUserData({...userData, "contact" : e.target.value})}
                id="contact" name="contact" type="number" required placeholder="Contact Number" aria-label="Contact number" />
            </div>
            <div class="inline-block mt-4 -mx-1 w-full md:w-1/2">
                <input class="w-full px-2 py-4 text-gray-700 bg-tertiary rounded" 
                onChange={(e)=>setUserData({...userData, "email" : e.target.value})}
                id="email"  name="email" type="email" required placeholder="Email" aria-label="email" />
            </div>
            
            <div class="mt-4 flex justify-end ">
                <button class="text-white main-gradient rounded-full px-10 py-3 mr-5" type="submit"><NavLink to="/Questionaire">Apply Now</NavLink></button>
            </div>
        </form>
    )
}
