import { IonButton, IonIcon, IonRange } from "@ionic/react"
import { createUseStyles } from "react-jss"
import { scanSharp } from "ionicons/icons"
import { useEffect, useState } from "react"
import { cssConstants } from "../../lib/jss/jss"

export interface VideoBottomBarProps {
  onFullscreen?: () => any
  onCurrentTimeChange?: (change: { currentTime: number }) => any
  getCurrentTime?: () => number
  getDuration?: () => number
}

export function VideoBottomBar(props: VideoBottomBarProps) {
  const {
    getDuration = () => 0,
    getCurrentTime = () => 0,
    onFullscreen = () => {},
    onCurrentTimeChange = () => {},
  } = props

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const progress = (currentTime / duration) * 100

  const styles = useStyles()

  useEffect(() => {
    sync()

    const interval = setInterval(() => {
      sync()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function sync() {
    updateCurrentTime()
    updateDuration()
  }

  function updateDuration() {
    const duration = getDuration()
    if (isNaN(duration) === false) {
      setDuration(duration)
    }
  }

  function updateCurrentTime() {
    const currentTime = getCurrentTime()

    if (isNaN(currentTime) === false) {
      setCurrentTime(currentTime)
    }
  }

  return (
    <div className={styles.videoBottomBar}>
      {/* LEFT */}
      <div className={styles.videoBottomBarItem}>
        <div className={styles.time}>{Math.ceil(currentTime)}</div>
      </div>

      <div className={`${styles.videoBottomBarItem} ${styles.spacer}`}>
        <IonRange
          className={styles.ionRange}
          value={progress}
          onIonChange={event => {
            const newProgress = (event.detail.value as number) / 100
            const newCurrentTime = newProgress * duration

            // event has class range-pressed if changed manually
            const isChangedByUser =
              event.target.classList.contains("range-pressed")

            if (isChangedByUser) {
              onCurrentTimeChange({ currentTime: newCurrentTime })
            }
          }}
        ></IonRange>
      </div>

      {/* RIGHT */}
      <div className={styles.videoBottomBarItem}>
        <div className={styles.time}>{Math.ceil(duration)}</div>
        <IonButton
          className={styles.ionicIconButton}
          color="none"
          onClick={() => {
            onFullscreen()
          }}
        >
          <IonIcon slot="icon-only" icon={scanSharp}></IonIcon>
        </IonButton>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoBottomBar: {
    display: "flex",
    alignItems: "center",

    padding: 8,
    paddingBottom: 8,
  },

  videoBottomBarItem: {
    display: "flex",
    alignItems: "center",
  },

  ionRange: {},

  time: {
    fontSize: cssConstants.baseFontSize * 1.1,
    opacity: "1 !important",
    display: "block !important",
  },

  spacer: {
    flex: "1 1",
  },

  ionicIconButton: {
    height: 60,
    width: 60,
    // make button square by removing sides padding
    "--padding-start": "0px",
    "--padding-end": "0px",
  },
})
