import { IVideo } from "../../lib/interface/Video"
import {
  createUseStyles,
  cssConstants,
  defineAspectRatio,
} from "../../lib/jss/jss"
import { VideoUiFieldsGenerator } from "../../lib/video-ui-fields-generator/VideoUiFieldsGenerator"
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

  const fancyGenerator = new VideoUiFieldsGenerator()
  const fancyViews = fancyGenerator.generateFancyViews({ views: video.views })
  const fancyDuration = fancyGenerator.generateFancyTime({
    durationInSeconds: video.durationInSeconds,
  })

  const currentSeconds = new Date().valueOf() / 1000
  const fancyPassedTime = fancyGenerator.generateFancyPassedTime({
    secondsSinceEvent: currentSeconds - video.uploadedIsoSeconds,
  })

  return (
    <div className={styles.videoItem}>
      <div className={styles.thumbnail}>
        <ImageFallbackComponent
          fallbackHeight={imageHeight}
          src={video.thumbnailUrl}
          alt={video.title}
        />
        <span className={styles.duration}>{fancyDuration}</span>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{video.title}</p>
        <p>{video.channelName}</p>
        <div className={styles.spaceBetween}>
          <span>{fancyViews} views</span>
          <span>{fancyPassedTime} ago</span>
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
    position: "relative",
    borderRadius: cssConstants.borderRadius.medium,
    overflow: "hidden",
  },
  duration: {
    position: "absolute",
    right: cssConstants.padding.small,
    bottom: cssConstants.padding.small,

    padding: cssConstants.padding.small,

    color: "white",
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: cssConstants.borderRadius.small,
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
