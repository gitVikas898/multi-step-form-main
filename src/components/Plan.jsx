import Card from "./Card";
import ToggleSwitch from "./Toggle";
import cards from "../utils/cards.json"
import { useEffect, useRef, useState } from "react";
import { usePlan } from "../utils/PlanContext";
const Plan = ({next,prev}) => {

  const formRef = useRef(null);
  const { selectedPlan, setselectedPlan } = usePlan(); 

  const handleSelected = (plan)=>{
      setselectedPlan(plan);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      // takes an event 

      //formRef.current gives the actual element 
      //event.target is the element that was clicked 
      // it checks if target was outside form then setselected plan as null
      if (formRef.current && !formRef.current.contains(event.target)) {
        setselectedPlan(null); // Deselect only if clicked outside the form
      }
    };

    document.addEventListener("mousedown", handleClickOutside); //adds event listner wheneve there is  a click
    return () => { 
      //removes event listner to prevent memory leaks
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="p-4 max-w-[40rem]">
      <form action="" onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-8 p-4" ref={formRef}>
        <div className="grid gap-4">
          <h1 className="text-4xl text-Marine-blue font-bold">Select your plan</h1>
          <p className="text-xl text-Cool-gray">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="grid gap-4 grid-cols-3" >
           { cards.map((card)=>{
            return(
               <Card card={card} key={card.id}
                isSelected={selectedPlan?.id === card.id}
                onSelect={handleSelected}
               /> 
            )
           }) }
        </div>
        <div className="flex items-center justify-center p-2 bg-Magnolia rounded-lg">
            <ToggleSwitch/>
        </div>
        <div className="flex items-center justify-between">

        <button className="bg-Magnolia text-Marine-blue px-5 py-3 rounded-lg" onClick={prev}>
                Go Back
            </button>

            <button className="bg-Marine-blue text-white px-5 py-3 rounded-lg" onClick={()=>{if(selectedPlan){
              console.log(selectedPlan)
              next();
            }else{
              alert("You must select a plan to proceed!")
            }}}>
                Next Step
            </button>
        </div>
      </form>
    </div>
  );
};

export default Plan;
