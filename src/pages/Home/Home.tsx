import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../../components/Card/Card";
import OpenBoosterButton from "../../components/OpenBoosterButton/OpenBoosterButton";
import SetsDropdown from "../../components/SetsDropDown/SetsDropDown";
import { useBooster } from "../../hooks/useBooster";
import { magicApiService } from "../../services";
import "./Home.css";

function Home() {
  const { booster, setBooster } = useBooster();
  const [select, setSelect] = useState("AFR");

  const getBoosterFromContext = async () => {
    const boosterCards = await magicApiService.getBoosterFromSet(select);
    setBooster(boosterCards.data.cards);
  };

  return (
    <div id="home">
      <SetsDropdown onChange={setSelect} />
      <OpenBoosterButton setName={select} onClick={getBoosterFromContext} />
      <div className="cards-container">
        <Carousel showIndicators={false} swipeable>
          {booster.map((card) => (
            <Card
              id={card.id}
              name={card.name}
              rarity={card.rarity}
              setName={card.setName}
              imageUrl={card.imageUrl}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
