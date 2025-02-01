import { usePlan } from "../utils/PlanContext";

const Finish = ({ prev, goToPlan ,next}) => {
  const {selectedPlan, selectedAddOn,isDuration} = usePlan();
  

  const totalPrice = selectedPlan?.value + (selectedAddOn?.reduce((sum,addOn)=>
    {
      if(isDuration === "Monthly"){
      return sum + addOn.value; 
    }else{
      return sum+addOn.yearly;
    }
    },0)||0);

  return (
    <div>
      <form action="" className="grid gap-6">
        <div>
          <h1 className="text-4xl text-Marine-blue font-bold">Finishing up</h1>
          <p className="text-xl text-Cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="grid gap-6 p-6 bg-Alabaster rounded-lg">
          <div className="flex justify-between items-center border-b border-Light-gray p-4">
            <span className="text-Marine-blue">{selectedPlan?.type}</span>
            <span className="text-Marine-blue">${selectedPlan?.value}/mo</span>
            <span className="text-Marine-blue cursor-pointer" onClick={goToPlan}>Change</span>
          </div>

          {selectedAddOn?.length > 0  && <div className="grid gap-2">
            {selectedAddOn.map((addOn) => {
              return (
                <div className="flex justify-between items-center" key={addOn.id}>
                  <span className="text-Cool-gray">{addOn?.type}</span>
                  <span className="text-Marine-blue">+{isDuration === "Monthly" ? addOn?.value : addOn.yearly}$/mo</span>
                </div>
              );
            })}
          </div>}

          <div className="flex justify-between items-center">
            <span className="text-Cool-gray">Total</span>
            <span className="text-Purplish-blue">${totalPrice}/mo</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-Magnolia text-Marine-blue px-5 py-3 rounded-lg"
            onClick={prev}
          >
            Go Back
          </button>

          <button className="bg-Purplish-blue text-white px-5 py-3 rounded-lg" onClick={next}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Finish;
