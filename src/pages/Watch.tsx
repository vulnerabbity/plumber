import { useEffect, useRef, useState } from "react"
import { createUseStyles } from "react-jss"
import { ChannelDetailsComponent } from "../components/channel-details/ChannelDetails"
import { VideoPlayerComponent } from "../components/player/player"
import { SubscribeButton } from "../components/subscribe-button/SubscribeButton"
import { VideoDetailsComponent } from "../components/video-details/VideoDetails"
import { VideoSectionsComponent } from "../components/video-sections/VideoSections"
import { adaptDetailedVideoToChannel } from "../lib/adapters/DetailedVideoToChannel"
import { ApiExtractor } from "../lib/api-extractor/ApiExtractor"
import { Fetcher } from "../lib/fetcher/Fetcher"
import { IDetailedVideo } from "../lib/interface/DetailedVideo"
import { useLocation } from "react-router-dom"

const fetcher = new Fetcher()

export function WatchPage() {
  const [detailedVideo, setDetailedVideo] = useState<IDetailedVideo | null>(
    null,
  )
  const searchParams = new URLSearchParams(useLocation().search)
  const videoId = searchParams.get("v")

  const styles = useStyles()

  useEffect(() => {
    scrollTop()
    onNewVideoIdReceived()
  }, [videoId])

  async function onNewVideoIdReceived() {
    if (!videoId) {
      return
    }

    const video = await fetcher.fetchDetailedVideo(videoId)

    // destroy previous player
    setDetailedVideo(null)

    if (!video) {
      return
    }

    setDetailedVideo(video)
  }

  function getViews() {
    return detailedVideo?.views
  }

  function getTitle() {
    return detailedVideo?.title
  }

  function getLikes() {
    return detailedVideo?.likes
  }

  function getDislikes() {
    return detailedVideo?.dislikes
  }

  function getDescription() {
    return detailedVideo?.description
  }

  function scrollTop() {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.watchVideoContainer}>
      {detailedVideo && (
        <VideoPlayerComponent
          thumbnailUrl={detailedVideo.thumbnailUrl}
          sources={[
            {
              isVideoOnly: false,
              mimeType: "application/x-mpegURL",
              url: detailedVideo.hls ?? detailedVideo.dash ?? "",
              quality: "",
            },
          ]}
        ></VideoPlayerComponent>
      )}
      <VideoDetailsComponent
        views={getViews()}
        likes={getLikes()}
        dislikes={getDislikes()}
        title={getTitle()}
      ></VideoDetailsComponent>
      {detailedVideo && (
        <div className={styles.channelSection}>
          <ChannelDetailsComponent
            channel={adaptDetailedVideoToChannel(detailedVideo)}
          ></ChannelDetailsComponent>
          <SubscribeButton
            channel={adaptDetailedVideoToChannel(detailedVideo)}
          ></SubscribeButton>
        </div>
      )}
      <div>
        <VideoSectionsComponent
          description={getDescription()}
          videos={detailedVideo?.relatedVideos ?? []}
        ></VideoSectionsComponent>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  watchVideoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    padding: "0 10rem",
    overflow: "unset",
  },
  channelSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
})
