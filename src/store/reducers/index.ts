import { combineReducers } from "redux"
import { trendsReducer } from "./trends"

export const rootReducer = combineReducers({
  trends: trendsReducer,
})
