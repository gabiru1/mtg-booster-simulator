import { ICard } from "../../interfaces";
import "./Card.css";

function Card({ name, setName, rarity, imageUrl, id }: ICard) {
  return (
    <div className="card-container" id={id}>
      <h3>{name}</h3>
      <p>{setName}</p>
      <div className="card-img">
        <img src={imageUrl} alt={name} />
      </div>
      <h4>{rarity}</h4>
    </div>
  );
}

export default Card;
