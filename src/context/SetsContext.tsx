import { createContext, Dispatch, SetStateAction } from "react";

import { ISet } from "../interfaces";

interface ISetsContextData {
  data: ISet[];
  setData: Dispatch<SetStateAction<ISet[]>>;
}

const SetsContext = createContext({} as ISetsContextData);

export default SetsContext;
