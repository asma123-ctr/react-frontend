import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";

export default function Header() {
  const { progress } = useContext(ContextProvider);
  return (
    <header className="w-full mx-auto md:flex justify-between container">
        
        <div className="py-5">
          <h1 className="text-4xl font-bold">digg</h1>
        </div>

        <div className="w-full md:w-3/4 py-5">
          <h3>Progress</h3>
          <div className="text-black w-full progress-bar bg-tertiary h-2 rounded-full" >
            <div className="progress main-gradient h-2 rounded-full" 
              style={{
                width: (progress) + "%",
              }}
            />
          </div>
        </div>

    </header>
  );
}