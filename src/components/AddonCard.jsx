import { usePlan } from "../utils/PlanContext"

const AddonCard = ({card,isSelected,onSelect}) => {

  const {isDuration} = usePlan();

  return (
    <div id="card" className={`flex gap-2 p-4 rounded-md border cursor-pointer ${ isSelected ? "border-Purplish-blue" : "border-Cool-gray"} items-center justify-between`} onClick={()=>onSelect(card)}>
            <div id="check" className={`h-6 w-6 rounded-md ${ isSelected ? "bg-Purplish-blue" : ""} flex items-center justify-center`} >
                <img src="/public/images/icon-checkmark.svg" alt="" />
            </div>
            <div className="grid ">
              <span className="text-lg text-Marine-blue ">{card.type}</span>
              <span className="text-sm text-Cool-gray">{card.description}</span>
            </div>
            <div>
                <span className={ isSelected ? "text-Purplish-blue" : "text-Cool-gray"}>+${isDuration === "Monthly" ? card?.value : card?.yearly}/mo</span>
            </div>
          </div>
  )
}

export default AddonCard