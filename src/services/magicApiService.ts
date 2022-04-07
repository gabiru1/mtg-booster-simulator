import { ICard } from "../interfaces";
import { Api } from "../providers";

const getBoosterFromSet = (setCode: string) =>
  Api.get<ICard[]>(
    `https://api.magicthegathering.io/v1/sets/${setCode}/booster`
  );

export const magicApiService = {
  getBoosterFromSet,
};
