import { IVideo } from "../../lib/interface/Video"

interface ITrendsState {
  videos: IVideo[]
  lastLoadDate: string
}

const trendsDefaultState: ITrendsState = {
  videos: [],
  lastLoadDate: String(Date()),
}

export function trendsReducer(
  state: ITrendsState = trendsDefaultState,
  action: any,
): ITrendsState {
  return state
}
