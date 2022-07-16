import { IVideo } from "../../lib/interface/Video"
import {
  createUseStyles,
  cssConstants,
  defineAspectRatio,
} from "../../lib/jss/jss"
import { VideoUiFieldsGeneratorInstance } from "../../lib/video-ui-fields-generator/VideoUiFieldsGenerator"
import { ImageFallbackComponent } from "../image-fallback/image-fallback"

const youtubeImageAspectRatio = 1.78

const { height: imageHeight, width: imageWidth } = defineAspectRatio({
  height: 190,
  aspectRatio: youtubeImageAspectRatio,
})

export interface VideoItemVerticalComponentProps {
  video: IVideo
}

export function VideoItemVerticalComponent(
  props: VideoItemVerticalComponentProps,
) {
  const { video } = props
  const styles = useStyles()

  const prettyViews = VideoUiFieldsGeneratorInstance.generateViewsText({
    views: video.views,
  })

  return (
    <div className={styles.videoItem}>
      <div className={styles.thumbnail}>
        <ImageFallbackComponent
          fallbackHeight={imageHeight}
          src={video.thumbnailUrl}
          alt={video.title}
        />
      </div>
      <div className={styles.textContainer}>
        <p>{video.title}</p>
        <p>{prettyViews}</p>
        <p>{}</p>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoItem: {
    width: imageWidth,
  },
  thumbnail: {
    borderRadius: cssConstants.borderRadius.medium,
    overflow: "hidden",
  },
  textContainer: {
    padding: `0 ${cssConstants.padding.small}rem`,
    "& > *": {
      marginTop: "10rem",
    },
  },
})
