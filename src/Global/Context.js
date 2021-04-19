import React, { createContext } from "react";
export const ContextProvider = createContext();

const Context = (props) => {
  const [step, setStep] = React.useState(1);
  const [progress, setProgress] = React.useState(12.5);
  const [userData, setUserData] = React.useState([]);

  const nextStep = () => {
    setStep(step+1);
    if(progress <= 87.5){
      setProgress(progress+12.5);
    }
    
  };

  const prevStep = () => {
    setStep(step-1)
    if(progress > 12.5){
      setProgress(progress-12.5);
    }
    
  };
  
  return (
    <ContextProvider.Provider
      value={{
        step,
        progress,
        userData,
        setUserData,
        nextStep,
        prevStep,
        setStep,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;