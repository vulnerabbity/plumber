import { useEffect, useState } from "react"
import { VideoPlayerComponent } from "../components/player/player"
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

  useEffect(() => {
    fetchVideo().then(video => {
      if (!video) {
        return
      }
      setDetailedVideo(video)
    })
  }, [])

  return (
    <div>
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
    </div>
  )
}

async function fetchVideo() {
  const href = window.location.href
  const videoId = ApiExtractor.extractVideoIdFromVideoUrl(href)

  const video = await fetcher.fetchDetailedVideo(videoId)
  return video
}
