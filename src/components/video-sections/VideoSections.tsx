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
          <span className={`${styles.description}`}>
            <span
              className="swiper-no-swiping"
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </span>
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
    "& a": {
      color: "blue",
      maxWidth: "fit-content",
    },
  },
  videosGrid: {
    width: "90%",
    textAlign: "left",
  },
})
