import addons from "../utils/addons.json"
import AddonCard from "./AddonCard";

const Addons = ({prev,next}) => {
  return (
    <div>
      <form action="" className="grid gap-4">
        <div>
          <h1 className="text-4xl text-Marine-blue font-bold">Pick add-ons</h1>
          <p className="text-xl text-Cool-gray">Add-ons help enhance your gaming experience.</p>
        </div>
        <div id="cards" className="grid gap-2">
            {addons.map((card)=>{
                return(
                    <AddonCard card={card} key={card.id}/>
                )
            })}
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

export default Addons;
