import { IVideo } from "../../lib/interface/Video"
import { makeAction } from "./action"

export const ActionLoadTrends = makeAction(
  "LOAD_TRENDS",
  (type: { videos: IVideo[] }) => {},
)

export type TrendsActions = ReturnType<typeof ActionLoadTrends>
