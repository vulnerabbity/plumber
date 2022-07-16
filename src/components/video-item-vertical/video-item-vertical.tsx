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
  height: 160,
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

  const { fancyViews, fancyTime } = VideoUiFieldsGeneratorInstance.generate({
    ...video,
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
        <p className={styles.title}>{video.title}</p>
        <p>{video.channelName}</p>
        <div className={styles.spaceBetween}>
          <span>{fancyViews}</span>
          <span>{fancyTime}</span>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  title: {
    fontSize: cssConstants.baseFontSize * 1.2,
    fontWeight: "bold",
  },
  videoItem: {
    width: imageWidth,
  },
  thumbnail: {
    borderRadius: cssConstants.borderRadius.medium,
    overflow: "hidden",
  },
  textContainer: {
    padding: `0 ${cssConstants.padding.small}rem`,
    // all child
    "& > *": {
      marginTop: "10rem",
    },
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
})
