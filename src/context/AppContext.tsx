import React , { createContext } from "react";
import { Question } from "../utils/Interfaces";

export const AppContext = createContext<{questions: Array<Question>}>({questions:[]});