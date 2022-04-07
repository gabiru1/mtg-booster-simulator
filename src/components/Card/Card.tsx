import { ICard } from "../../interfaces";
import "./Card.css";

function Card({ name, setName, rarity, text, imageUrl, flavor, id }: ICard) {
  return (
    <div className="card-container" id={id}>
      <h3 className="legend">{name}</h3>
      <p>{setName}</p>
      <div className="card-img">
        <img src={imageUrl} alt={name} />
      </div>
      <p>{rarity}</p>
      <p>{flavor}</p>
      <p>{text}</p>
    </div>
  );
}

export default Card;
