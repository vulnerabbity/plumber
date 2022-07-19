import { IChannel } from "../../lib/interface/Channel"
import { SubscriptionsActions } from "../actions/subscriptions"
import { SubscriptionsChecker } from "../checkers/subscriptions"

export interface SubscriptionsState {
  channels: IChannel[]
}

const initialSubscriptionsState: SubscriptionsState = {
  channels: [],
}

export function subscriptionsReducer(
  state: SubscriptionsState = initialSubscriptionsState,
  action: SubscriptionsActions,
): SubscriptionsState {
  const { type: actionType, payload } = action

  const checker = new SubscriptionsChecker(state)

  if (actionType === "SUBSCRIBE") {
    const channelToSubscribe = payload.channel
    const idToSubscribe = channelToSubscribe.channelId

    const isAlreadySubscribed = checker.isSubscribed(idToSubscribe)

    if (isAlreadySubscribed) {
      return state
    }

    const newChannels = [...state.channels, channelToSubscribe]

    return { ...state, channels: newChannels }
  }

  if (actionType === "UNSUBSCRIBE") {
    const idToUnsubscribe = payload.channelId

    const newChannels = state.channels.filter(
      channel => channel.channelId !== idToUnsubscribe,
    )

    return { ...state, channels: newChannels }
  }

  return state
}
