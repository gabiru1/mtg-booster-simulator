import { ICard } from "../../interfaces";

function Card({ name, setName, rarity, text, imageUrl, flavor, id }: ICard) {
  return (
    <div className="card" id={id}>
      <h3 className="legend">{name}</h3>
      <p>{setName}</p>
      <img id="card-img" src={imageUrl} alt={name} />
      <p>{rarity}</p>
      <p>{flavor}</p>
      <p>{text}</p>
    </div>
  );
}

export default Card;
