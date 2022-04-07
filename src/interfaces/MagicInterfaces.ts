export interface ICard {
  id: string;
  name: string;
  setName: string;
  rarity: string;
  text: string;
  imageUrl: string;
  flavor: string;
}

export interface IBooster {
  cards: ICard[];
}

export interface ISet {
  code: string;
  name: string;
  booster: string[];
  releaseDate: string;
}

export interface ISets {
  sets: ISet[];
}
