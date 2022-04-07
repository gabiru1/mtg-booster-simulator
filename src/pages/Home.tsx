import { useEffect } from "react";

import Card from "../components/Card/Card";
import { useBooster } from "../hooks/useBooster";

function Home() {
  const { booster, getBooster } = useBooster();

  useEffect(() => {
    getBooster("M14");
  }, []);

  return (
    <div>
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
  );
}

export default Home;
