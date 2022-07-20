import { combineReducers } from "redux"
import { subscriptionsReducer } from "./subscriptions"
import { themeReducer } from "./theme"
import { trendsReducer } from "./trends"

export const rootReducer = combineReducers({
  trends: trendsReducer,
  theme: themeReducer,
  subscriptions: subscriptionsReducer,
})
