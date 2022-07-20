import { Link } from "react-router-dom"
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

const avatarSize = 48

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
      <Link to={video.videoUrl}>
        <div className={styles.thumbnail}>
          <ImageFallbackComponent
            className={styles.thumbnailImage}
            fallbackHeight={imageHeight}
            src={video.thumbnailUrl}
            alt={video.title}
          />
          <span className={`${styles.duration} duration`}>{fancyDuration}</span>
        </div>
      </Link>
      <div className={styles.videoInfo}>
        <div className={styles.avatarColumn}>
          <ImageFallbackComponent
            className={styles.channelAvatar}
            src={video.channelAvatarUrl ?? ""}
            fallbackHeight={avatarSize}
          ></ImageFallbackComponent>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{video.title}</p>

          <p className={styles.channelName}>{video.channelName}</p>

          <div className={styles.metaInfo}>
            <span>{fancyViews} views •</span>
            <span> {fancyPassedTime} ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  videoItem: {
    maxWidth: imageWidth,
  },
  title: {
    fontSize: cssConstants.baseFontSize * 1.1,
    fontWeight: "bold",
    textAlign: "left",
  },

  thumbnailImage: {
    height: imageHeight,
  },
  thumbnail: {
    position: "relative",
    borderRadius: cssConstants.borderRadius.medium,
    overflow: "hidden",

    "&:hover": {
      "& > .duration": {
        opacity: 0,
      },
    },
  },
  channelName: {
    fontSize: cssConstants.baseFontSize * 1.15,
  },
  channelAvatar: {
    width: avatarSize,
    height: avatarSize,

    display: "inline-block",
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatarColumn: {
    width: avatarSize,
    marginRight: cssConstants.padding.small,
  },
  duration: {
    position: "absolute",
    right: cssConstants.padding.small,
    bottom: cssConstants.padding.small,

    padding: cssConstants.padding.small,

    color: "white",
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: cssConstants.borderRadius.small,
    transition: cssConstants.transition.fast + "s",
  },
  textContainer: {
    // all child
    "& > *": {
      marginBottom: "10rem",
    },
  },
  videoInfo: {
    display: "flex",
    padding: `0 ${cssConstants.padding.small}rem`,
    marginTop: cssConstants.padding.small,
  },
  metaInfo: {
    fontSize: cssConstants.baseFontSize * 0.8,
  },
})
