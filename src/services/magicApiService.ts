import { IBooster } from "../interfaces";
import { Api } from "../providers";

const getBoosterFromSet = async (setCode: string) =>
  Api.get<IBooster>(
    `https://api.magicthegathering.io/v1/sets/${setCode}/booster`
  );

export const magicApiService = {
  getBoosterFromSet,
};
