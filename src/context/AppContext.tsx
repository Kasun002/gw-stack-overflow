import { createContext } from "react";
import { ContextData } from "../utils/Interfaces";

export const AppContext = createContext<ContextData>({ questions: [], updateData: () => { }});