import { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import { ChannelDetailsComponent } from "../components/channel-details/ChannelDetails"
import { VideoPlayerComponent } from "../components/player/player"
import { VideoDetailsComponent } from "../components/video-details/VideoDetails"
import { adaptDetailedVideoToChannel } from "../lib/adapters/DetailedVideoToChannel"
import { adaptPipedApiStreamsToVideoSources } from "../lib/adapters/PipedApiToVideoSource"
import { ApiExtractor } from "../lib/api-extractor/ApiExtractor"
import { Fetcher } from "../lib/fetcher/Fetcher"
import { IDetailedVideo } from "../lib/interface/DetailedVideo"
import { VideoPlayerSource } from "../lib/interface/VideoPlayerSource"

const fetcher = new Fetcher()

export function WatchPage() {
  const [detailedVideo, setDetailedVideo] = useState<IDetailedVideo | null>(
    null,
  )

  const styles = useStyles()

  useEffect(() => {
    fetchVideo().then(video => {
      if (!video) {
        return
      }
      setDetailedVideo(video)
    })
  }, [])

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
        <ChannelDetailsComponent
          channel={adaptDetailedVideoToChannel(detailedVideo)}
        ></ChannelDetailsComponent>
      )}
    </div>
  )
}

const useStyles = createUseStyles({
  watchVideoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 10rem",
  },
})

async function fetchVideo() {
  const href = window.location.href
  const videoId = ApiExtractor.extractVideoIdFromVideoUrl(href)

  const video = await fetcher.fetchDetailedVideo(videoId)
  return video
}
