import { IonSlide, IonSlides } from "@ionic/react"
import { createUseStyles } from "react-jss"
import { IVideo } from "../../lib/interface/Video"
import { VideoItemsContainerComponent } from "../video-items-container/videoItemsContainer"

export interface VideoSectionsComponentProps {
  className?: string
  description?: string
  videos?: IVideo[]
}

export function VideoSectionsComponent(props: VideoSectionsComponentProps) {
  const { description = "", videos = [], className = "" } = props
  const styles = useStyles()
  console.log({ description })

  return (
    <section className={`${className}`}>
      <IonSlides>
        <IonSlide>
          <div className={styles.description}>{description}</div>
        </IonSlide>
        <IonSlide>
          <VideoItemsContainerComponent
            className={styles.videosGrid}
            videos={videos}
          ></VideoItemsContainerComponent>
        </IonSlide>
      </IonSlides>
    </section>
  )
}

const useStyles = createUseStyles({
  description: {
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: "90%",
  },
  videosGrid: {
    width: "90%",
    textAlign: "left",
  },
})
