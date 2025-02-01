import { usePlan } from "../utils/PlanContext";

const ToggleSwitch = () => {

  const {isDuration,setDuration} = usePlan();// State to track the toggle status

  const handleToggle = () => {
    setDuration((prevState) => prevState === "Monthly" ? "Yearly" : "Monthly"); 
   // Toggle the state between true/false
  };

  return (
    <div className="flex gap-4">
      <p className={isDuration === "Monthly" ? "text-Marine-blue" : "text-Cool-gray"}>Monthly</p>
      <label className="flex items-center cursor-pointer">
       
        <div className={`relative inline-block w-12 h-6 rounded-full transition-all  ${isDuration ? "bg-Marine-blue" : "bg-Marine-blue"}`}onClick={handleToggle}>
            <div className={`absolute top-1.5 left-1 w-3 h-3 rounded-full bg-white transition-transform ${isDuration === "Yearly" ? "transform translate-x-6" : ""}`}></div>
        </div>
      </label>
        <p className={isDuration === "Yearly" ? "text-Marine-blue" : "text-Cool-gray "}>Yearly</p>
    </div>
  );
};

export default ToggleSwitch;
