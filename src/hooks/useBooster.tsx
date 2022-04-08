import { useCallback, useState } from "react";

import { ICard } from "../interfaces";
import { magicApiService } from "../services";

export const useBooster = () => {
  const [booster, setbooster] = useState<ICard[]>([]);

  const getBooster = useCallback(async (setCode: string) => {
    const { status, data } = await magicApiService.getBoosterFromSet(setCode);

    if (status !== 200) throw new Error();

    setbooster(data.cards);
  }, []);
  return {
    booster,
    setbooster,
    getBooster,
  };
};
