const AddonCard = ({card}) => {
  return (
    <div id="card" className="flex gap-2 p-4 rounded-md border border-Purplish-blue items-center justify-between">
            <div id="check" className="h-6 w-6 rounded-md bg-Purplish-blue flex items-center justify-center">
                <img src="/public/images/icon-checkmark.svg" alt="" />
            </div>
            <div className="grid ">
              <span className="text-lg text-Marine-blue ">{card.type}</span>
              <span className="text-sm text-Cool-gray">{card.description}</span>
            </div>
            <div>
                <span className="text-Purplish-blue">+${card.value}/mo</span>
            </div>
          </div>
  )
}

export default AddonCard