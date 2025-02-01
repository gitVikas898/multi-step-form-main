import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({children})=>{
    const  [selectedPlan, setselectedPlan] = useState(null);
    const [selectedAddOn, setselectedAddOn] = useState([]);
    const [isDuration, setDuration] = useState("Monthly");

    return (
       <PlanContext.Provider value={{selectedPlan,setselectedPlan,selectedAddOn,setselectedAddOn ,isDuration,setDuration}}>
            {children}        
       </PlanContext.Provider>
    )
}

export const usePlan = () => useContext(PlanContext);