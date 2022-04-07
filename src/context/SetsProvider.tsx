/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, useEffect, useState } from "react";

import { ISet } from "../interfaces";
import { magicApiService } from "../services";
import SetsContext from "./SetsContext";

interface ISetsProviderProps {
  children: ReactNode;
}

function SetsProvider({ children }: ISetsProviderProps) {
  const [data, setData] = useState<ISet[]>([]);
  const getSets = async () => {
    const allSets: ISet[] = await magicApiService.getSets();
    setData(allSets);
  };

  useEffect(() => {
    getSets();
  }, []);

  return (
    <SetsContext.Provider value={{ data, setData }}>
      {children}
    </SetsContext.Provider>
  );
}

export default SetsProvider;
