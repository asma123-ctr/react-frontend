import React, { useState, useContext } from "react";
import Header from './Header';
import { ContextProvider } from "../Global/Context";
import Part1 from "./forms/Part1";
import Part2 from "./forms/Part2";
import Part3 from "./forms/Part3";
import Part4 from "./forms/Part4";
import Part5 from "./forms/Part5";
import Part6 from "./forms/Part6";
import Part7 from "./forms/Part7";
import Review from "./forms/Review";
import Shapes from './Shapes';

const Questionaire = () => {
    const { step } = useContext(ContextProvider);
    let component;
    
  switch(step) {
    case 1:
      component = <Part1 />
    break
    case 2:
        component = <Part2 />
    break
    case 3:
      component = <Part3 />
    break
    case 4:
        component = <Part4 />
    break
    case 5:
      component = <Part5 />
    break
    case 6:
        component = <Part6 />
    break
    case 7:
        component = <Part7 />
    break
    case 8:
        component = <Review />
    break
    default:
        component = <div>Error</div>
  }

  return (
      <div>
        {step !== 8 ? <Shapes /> : ("")}
        <Header />
        <div className="py-6 w-full mx-auto container">
            {component}
        </div>
      </div>
        
      )
    
}
export default Questionaire;