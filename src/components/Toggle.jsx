import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false); // State to track the toggle status

  const handleToggle = () => {
    setIsOn((prevState) => !prevState); // Toggle the state between true/false
  };

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <span className="mr-4">{isOn ? "Monthly" : "Early"}</span>
        <div className={`relative inline-block w-12 h-6 rounded-full transition-all ${isOn ? "bg-blue-500" : "bg-gray-300"}`}onClick={handleToggle}>
          <div className={`absolute top-0 left-0 w-6 h-6 rounded-full bg-white transition-transform ${isOn ? "transform translate-x-6" : ""}`}></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
