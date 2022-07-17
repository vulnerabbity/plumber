import { IVideo } from "../../lib/interface/Video"
import { TrendsActions } from "../actions/trends"

interface ITrendsState {
  videos: IVideo[]
  lastLoadDateIsoMilliseconds: number
}

const trendsDefaultState: ITrendsState = {
  videos: [],
  lastLoadDateIsoMilliseconds: -1,
}

export function trendsReducer(
  state: ITrendsState = trendsDefaultState,
  action: TrendsActions,
): ITrendsState {
  const { type: actionType, payload } = action
  if (actionType === "LOAD_TRENDS") {
    return { ...state, videos: payload.videos }
  }

  return state
}
