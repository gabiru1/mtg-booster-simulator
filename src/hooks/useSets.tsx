import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ISet } from "../interfaces";
import { magicApiService } from "../services";

interface ISetsProviderProps {
  children: ReactNode;
}

interface ISetsContextData {
  data: ISet[];
  setData: Dispatch<SetStateAction<ISet[]>>;
}

const SetsContext = createContext({} as ISetsContextData);

function SetsProvider({ children }: ISetsProviderProps) {
  const [data, setData] = useState<ISet[]>([]);
  const getSets = async () => {
    const allSets: ISet[] = await magicApiService.getSets();
    setData(allSets);
    console.log(allSets);
  };

  useEffect(() => {
    getSets();
    console.log(data, "123");
  }, []);

  const foo = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  );

  return <SetsContext.Provider value={foo}>{children}</SetsContext.Provider>;
}

const useSets = (): ISetsContextData => {
  const context = useContext(SetsContext);

  if (context) {
    throw new Error("useSets must be used within an SetsProvider");
  }

  return context;
};

export { useSets, SetsProvider };
