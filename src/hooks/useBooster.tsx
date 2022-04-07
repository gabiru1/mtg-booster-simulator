import { useCallback, useState } from "react";

import { ICard } from "../interfaces";
import { magicApiService } from "../services";

export const useBooster = () => {
  const [booster, setbooster] = useState<ICard[]>();

  const getBooster = useCallback(async () => {
    const { status, data } = await magicApiService.getBoosterFromSet("M14");

    if (status !== 200) throw new Error();

    setbooster(data);
  }, []);
  return {
    booster,
    getBooster,
  };
};
