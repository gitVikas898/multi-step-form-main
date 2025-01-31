const Card = ({card , isSelected,onSelect}) => {
  return (
    <div
      id="card" className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${isSelected ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}onClick={()=>onSelect(card)}>
      <div>
        <img src={card.img_url} alt="" />
      </div>
      <div>
        <p className="text-Marine-blue">{card.type}</p>
        <p className="tex-xs text-Light-gray"> ${card.value}/mo</p>
      </div>
    </div>
  );
};

export default Card;
