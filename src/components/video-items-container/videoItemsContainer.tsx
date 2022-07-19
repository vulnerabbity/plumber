import { createRef } from "react"
import { createUseStyles } from "react-jss"
import { IVideo } from "../../lib/interface/Video"
import { VideoItemVerticalComponent } from "../video-item-vertical/video-item-vertical"

export interface VideoItemsContainerComponentProps {
  videos: IVideo[]
  className?: string
}

export function VideoItemsContainerComponent({
  videos,
  className,
}: VideoItemsContainerComponentProps) {
  const styles = useStyles()

  return (
    <div className={`${styles.videoItemsContainer} ${className}`}>
      <div className={styles.itemsContainer}>
        {videos.map(video => {
          return (
            <div className={styles.item} key={Math.random()}>
              <VideoItemVerticalComponent
                video={video}
              ></VideoItemVerticalComponent>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoItemsContainer: {},
  itemsContainer: {
    display: "grid",
    // Prefer 300rem for item but make 100vw on screen.width < 300
    gridTemplateColumns: "repeat(auto-fit, minmax(min(300rem, 100vw), 1fr))",
    gridGap: 8,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    minWidth: "none",
  },
})
