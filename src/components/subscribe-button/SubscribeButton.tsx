import { IonButton } from "@ionic/react"
import { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import { IChannel } from "../../lib/interface/Channel"
import { cssConstants } from "../../lib/jss/jss"
import {
  ActionSubscribe,
  ActionUnsubscribe,
} from "../../store/actions/subscriptions"
import { SubscriptionsChecker } from "../../store/checkers/subscriptions"
import { accessRootStore } from "../../store/store"

interface SubscribeButtonProps {
  className?: string
  channel: IChannel
}

export function SubscribeButton(props: SubscribeButtonProps) {
  const { className, channel } = props
  const { channelId } = channel
  const {
    state: { subscriptions: subscriptionsState },
    dispatch,
  } = accessRootStore()

  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setIsSubscribed(checkIsSubscribed())
  }, [subscriptionsState])

  const styles = useStyles()

  const buttonText = isSubscribed ? "Unsubscribe" : "Subscribe"

  function onSubscribe() {
    if (isSubscribed) {
      dispatch(ActionUnsubscribe({ channelId }))
    } else {
      dispatch(ActionSubscribe({ channel }))
    }
  }

  function checkIsSubscribed(): boolean {
    const checker = new SubscriptionsChecker(subscriptionsState)

    return checker.isSubscribed(channel.channelId)
  }

  return (
    <div className={`${className} ${styles.subscribeButtonComponent}`}>
      <IonButton
        className={styles.subscribeButton}
        onClick={() => {
          onSubscribe()
        }}
      >
        {buttonText}
      </IonButton>
    </div>
  )
}

const useStyles = createUseStyles({
  subscribeButtonComponent: {},
  subscribeButton: {
    fontSize: cssConstants.baseFontSize * 1.2,
  },
})
