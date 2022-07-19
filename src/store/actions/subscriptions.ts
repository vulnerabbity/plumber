import { IChannel } from "../../lib/interface/Channel"
import { makeAction } from "./action"

export const ActionSubscribe = makeAction(
  "SUBSCRIBE",
  (type: { channel: IChannel }) => {},
)

export const ActionUnsubscribe = makeAction(
  "UNSUBSCRIBE",
  (type: { channelId: IChannel["channelId"] }) => {},
)

export type SubscriptionsActions = ReturnType<
  typeof ActionSubscribe | typeof ActionUnsubscribe
>
