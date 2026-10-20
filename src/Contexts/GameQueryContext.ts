import type { Gamequery } from "@/App";
import { createContext, useContext } from "react";

export const GameQueryContext = createContext({} as Gamequery);

export function useGameQuery() {
  return useContext(GameQueryContext);
}