import { useEffect } from "react";

import Card from "../../components/Card/Card";
import { useBooster } from "../../hooks/useBooster";
import { useSets } from "../../hooks/useSets";
import "./Home.css";

function Home() {
  const { booster, getBooster } = useBooster();
  const { data, set, setSet } = useSets();

  useEffect(() => {
    getBooster("m14");
  }, []);

  return (
    <div>
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
