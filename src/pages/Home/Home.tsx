import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import OpenBoosterButton from "../../components/OpenBoosterButton/OpenBoosterButton";
import SetsDropdown from "../../components/SetsDropDown/SetsDropDown";
import { useBooster } from "../../hooks/useBooster";
import { magicApiService } from "../../services";
import "./Home.css";

function Home() {
  const { booster, setBooster } = useBooster();
  const [select, setSelect] = useState("NEO");

  const getBoosterFromContext = async () => {
    const boosterCards = await magicApiService.getBoosterFromSet(select);
    setBooster(boosterCards.data.cards);
  };

  return (
    <div>
      <SetsDropdown onChange={setSelect} />
      <OpenBoosterButton setName={select} onClick={getBoosterFromContext} />
      <div className="cards-container">
        {booster.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            rarity={card.rarity}
            setName={card.setName}
            flavor={card.flavor}
            text={card.text}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
