import addons from "../utils/addons.json"
import { usePlan } from "../utils/PlanContext";
import AddonCard from "./AddonCard";

const Addons = ({prev,next}) => {

  const {selectedAddOn,setselectedAddOn} = usePlan();

  const handleAddon = (addOn)=>{
    setselectedAddOn((prevSelected)=>{
        if(prevSelected.some(item=>item.id === addOn.id)){
          return prevSelected.filter(item=>item.id!==addOn.id);
        }else{
          return [...prevSelected,addOn];
        }
    });
  }


  return (
    <div>
      <form action="" className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <h1 className="text-4xl text-Marine-blue font-bold">Pick add-ons</h1>
          <p className="text-xl text-Cool-gray">Add-ons help enhance your gaming experience.</p>
        </div>
        <div id="cards" className="grid gap-2">
            {addons.map((card)=>{
                return(
                    <AddonCard card={card} key={card.id}
                      isSelected={selectedAddOn.some(item => item.id === card.id)}
                      onSelect={handleAddon}
                    />
                )
            })}
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-Magnolia text-Marine-blue px-5 py-3 rounded-lg" onClick={prev}>
            Go Back
          </button>

          <button className="bg-Marine-blue text-white px-5 py-3 rounded-lg" onClick={()=>{if(selectedAddOn){
              console.log(selectedAddOn)
              next();
            }}}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addons;
