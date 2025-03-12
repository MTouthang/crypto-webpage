import { createContext } from "react";

type Icurrency = {
  currency: string;
  setCurrency: (currency: string) => void;
};

export const CurrencyContext = createContext<Icurrency>({
  currency: "usd",
  setCurrency: () => {},
});
