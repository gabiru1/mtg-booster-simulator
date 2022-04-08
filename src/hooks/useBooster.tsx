import { useCallback, useState } from "react";

import { ICard } from "../interfaces";
import { magicApiService } from "../services";

export const useBooster = () => {
  const [booster, setBooster] = useState<ICard[]>([]);

  const getBooster = useCallback(async (setCode: string) => {
    const { status, data } = await magicApiService.getBoosterFromSet(setCode);

    if (status !== 200) throw new Error();

    setBooster(data.cards);
  }, []);
  return {
    booster,
    setBooster,
    getBooster,
  };
};
