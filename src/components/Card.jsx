const Card = ({card}) => {
  return (
    <div
      id="card"
      className="grid gap-4 p-4 border border-Purplish-blue rounded-lg"
    >
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
