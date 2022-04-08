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
  set: string;
  setData: Dispatch<SetStateAction<ISet[]>>;
  setSet: Dispatch<SetStateAction<string>>;
}

const SetsContext = createContext({} as ISetsContextData);

function SetsProvider({ children }: ISetsProviderProps) {
  const [data, setData] = useState<ISet[]>([]);
  const [set, setSet] = useState("NEO");
  const getSets = async () => {
    const allSets: ISet[] = await magicApiService.getSets();
    setData(allSets);
  };

  useEffect(() => {
    getSets();
  }, []);

  const foo = useMemo(
    () => ({
      data,
      setData,
      set,
      setSet,
    }),
    [data]
  );

  console.log(data);

  return <SetsContext.Provider value={foo}>{children}</SetsContext.Provider>;
}

const useSets = (): ISetsContextData => {
  const context = useContext(SetsContext);

  if (!context) {
    throw new Error("useSets must be used within an SetsProvider");
  }

  return context;
};

export { useSets, SetsProvider };
