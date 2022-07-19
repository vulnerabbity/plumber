import { SubscriptionsState } from "../reducers/subscriptions"

export class SubscriptionsChecker {
  constructor(private state: SubscriptionsState) {}

  isSubscribed(channelIdToCheck: string) {
    const foundedItem = this.state.channels.find(
      channel => channel.channelId === channelIdToCheck,
    )

    return !!foundedItem
  }
}
