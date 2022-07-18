import { IonRange } from "@ionic/react"
import { createUseStyles } from "react-jss"

export function VideoBottomBar() {
  const styles = useStyles()

  return (
    <div className={styles.videoBottomBar}>
      {/* LEFT */}
      <div>Left</div>

      <div className={styles.spacer}>
        <IonRange className={styles.ionRange}></IonRange>
      </div>

      {/* RIGHT */}
      <div>Right</div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoBottomBar: {
    display: "flex",
    paddingBottom: 12,
  },

  ionRange: {
    padding: 0,
    maxHeight: 30,
  },

  spacer: {
    flex: "1 1",
  },
})
