import { ReactNode, useEffect, useState } from "react";

import { ISets } from "../interfaces";
import { magicApiService } from "../services";
import SetsContext from "./SetsContext";

interface ISetsProviderProps {
  children: ReactNode;
}

function SetsProvider({ children }: ISetsProviderProps) {
  const [data, setData] = useState([]);
  const getSets = async () => {
    const allSets: ISets = await magicApiService.getSets();
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