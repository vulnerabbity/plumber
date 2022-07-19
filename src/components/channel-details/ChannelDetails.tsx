import { IonIcon } from "@ionic/react"
import { createUseStyles } from "react-jss"
import { IChannel } from "../../lib/interface/Channel"
import { cssConstants } from "../../lib/jss/jss"
import { ImageFallbackComponent } from "../image-fallback/image-fallback"
import { checkmarkCircleSharp as verifiedIcon } from "ionicons/icons"

export interface ChannelDetailsComponentProps {
  channel: IChannel
}

const avatarSize = 65

export function ChannelDetailsComponent(props: ChannelDetailsComponentProps) {
  const { channel } = props
  const { avatarUrl, subscribersCount, name: channelName, isVerified } = channel

  const styles = useStyles()

  return (
    <div className={styles.channelDetailsComponent}>
      <div className={styles.avatar}>
        <ImageFallbackComponent
          src={avatarUrl}
          fallbackHeight={avatarSize}
        ></ImageFallbackComponent>
      </div>
      <div className={styles.channelText}>
        <div className={styles.channelName}>
          {channelName}
          {isVerified && (
            <IonIcon
              className={styles.verifiedIcon}
              icon={verifiedIcon}
            ></IonIcon>
          )}
        </div>
        <div className={styles.subscribersCount}>
          {subscribersCount} subscribers
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  channelDetailsComponent: {
    display: "flex",
    maxWidth: "fit-content",
    alignItems: "center",
  },
  channelText: {
    marginLeft: 10,
  },
  channelName: {
    display: "flex",
    alignItems: "center",

    fontSize: cssConstants.baseFontSize * 1.2,
    fontWeight: "bold",

    marginBottom: cssConstants.padding.small,
  },
  verifiedIcon: {
    marginLeft: cssConstants.padding.small,
    marginTop: cssConstants.padding.smaller,
  },
  subscribersCount: {
    opacity: 0.7,
    fontWeight: 500,
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    overflow: "hidden",
    borderRadius: "50%",
  },
})
