import { IonIcon, IonButton } from "@ionic/react"
import { createUseStyles } from "react-jss"

export interface VideoTitlebarProps {}

export function VideoTopBar(props: VideoTitlebarProps) {
  const styles = useStyles()
  const quality = "720p"
  return (
    <div className={styles.videoTopBar}>
      {/* LEFT */}
      <div></div>

      <span className={styles.spacer}></span>

      {/* RIGHT */}
      <div>
        <button>{quality}</button>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoTopBar: {
    display: "flex",
  },
  spacer: {
    flex: "1 1",
  },
})
