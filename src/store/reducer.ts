import { combineReducers } from "redux";
import { reducer as counter } from "@/modules/counter";

export const reducer = combineReducers({ counter });
