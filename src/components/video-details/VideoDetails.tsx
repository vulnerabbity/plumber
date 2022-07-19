import { IonButton, IonIcon } from "@ionic/react"
import { createUseStyles } from "react-jss"
import { cssConstants } from "../../lib/jss/jss"
import {
  thumbsUpSharp as likeIcon,
  thumbsDownSharp as dislikeIcon,
} from "ionicons/icons"
import { SubscribeButton } from "../subscribe-button/SubscribeButton"
import { IChannel } from "../../lib/interface/Channel"

export interface VideoDetailsComponentProps {
  title?: string
  views?: number
  likes?: number
  dislikes?: number
}

export function VideoDetailsComponent(props: VideoDetailsComponentProps) {
  const {
    title = "Loading title...",
    views = 0,
    likes = 0,
    dislikes = 0,
  } = props
  const styles = useStyles()

  return (
    <div className={styles.videoDetails}>
      <h1 className={styles.videoTitle}>{title}</h1>
      <div className={styles.videoStatisticsContainer}>
        <div>
          <span className={styles.statisticItem}>{views} views</span>
        </div>
        <div>
          <div className={styles.statisticItem}>
            <IonButton className={styles.likeDislikeButton} fill="clear">
              <IonIcon icon={likeIcon}></IonIcon>
            </IonButton>
            <span className={styles.likesCount}>{likes}</span>
          </div>

          <div className={styles.statisticItem}>
            <IonButton className={styles.likeDislikeButton} fill="clear">
              <IonIcon icon={dislikeIcon}></IonIcon>
            </IonButton>
            <span className={styles.likesCount}>{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoDetails: {},
  videoTitle: {
    fontSize: cssConstants.baseFontSize * 1.5,
  },
  videoStatisticsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statisticItem: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: cssConstants.baseFontSize * 1.2,
  },
  likesCount: {
    margin: cssConstants.padding.medium,
  },
  likeDislikeButton: {
    fontSize: 30,
    height: 60,
  },

  channelName: {},
  subscribeButton: {},
})
