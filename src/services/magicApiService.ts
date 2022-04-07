import { IBooster, ISet, ISets } from "../interfaces";
import { Api } from "../providers";

const getBoosterFromSet = (setCode: string) =>
  Api.get<IBooster>(
    `https://api.magicthegathering.io/v1/sets/${setCode}/booster`
  );

const getSets = async () => {
  const SORT_COMPARATION = -1;
  const { data } = await Api.get<ISets>(
    "https://api.magicthegathering.io/v1/sets"
  );
  const arraySets = data.sets.map((set: ISet) => set.booster && set);
  arraySets.sort((a, b) => {
    if (a.releaseDate > b.releaseDate) return SORT_COMPARATION;
    return 0;
  });
  return arraySets;
};

export const magicApiService = {
  getBoosterFromSet,
  getSets,
};
