import { IonButton, IonIcon, IonRange } from "@ionic/react"
import { createUseStyles } from "react-jss"
import { scanSharp } from "ionicons/icons"

export interface VideoBottomBarProps {
  onFullscreen?: () => any
}

export function VideoBottomBar(props: VideoBottomBarProps) {
  const { onFullscreen = () => {} } = props

  const styles = useStyles()

  return (
    <div className={styles.videoBottomBar}>
      {/* LEFT */}
      <div>Left</div>

      <div className={styles.spacer}>
        <IonRange className={styles.ionRange}></IonRange>
      </div>

      {/* RIGHT */}
      <div>
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

  ionRange: {},

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
