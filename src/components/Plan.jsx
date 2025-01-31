import Card from "./Card";
import ToggleSwitch from "./Toggle";
import cards from "../utils/cards.json"
const Plan = ({next,prev}) => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4 p-4">
        <div className="grid gap-2">
          <h1 className="text-4xl text-Marine-blue font-bold">Select your plan</h1>
          <p className="text-xl text-Cool-gray">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="grid gap-4 grid-cols-3">
           { cards.map((card)=>{
            return(
               <Card card={card} key={card.id}/> 
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

            <button className="bg-Marine-blue text-white px-5 py-3 rounded-lg" onClick={next}>
                Next Step
            </button>
        </div>
      </form>
    </div>
  );
};

export default Plan;
