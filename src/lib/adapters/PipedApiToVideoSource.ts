import { VideoPlayerSource } from "../interface/VideoPlayerSource"
import { AudioStream, VideoStream } from "piped-api"

type PipedStream = AudioStream | VideoStream

export class PipedApiStreamToVideoSourceAdapter implements VideoPlayerSource {
  quality: string
  url: string
  mimeType: string
  isVideoOnly: boolean

  constructor(pipedStream: PipedStream) {
    const { quality, url, mimeType, videoOnly } = pipedStream

    this.quality = quality
    this.url = url
    this.mimeType = mimeType
    this.isVideoOnly = videoOnly
  }
}

export function adaptPipedApiStreamToVideoSource(
  pipedStream: PipedStream,
): VideoPlayerSource {
  return new PipedApiStreamToVideoSourceAdapter(pipedStream)
}

export function adaptPipedApiStreamsToVideoSources(
  pipedStreams: PipedStream[],
) {
  const adaptedList: VideoPlayerSource[] = []

  pipedStreams.forEach(pipedStream => {
    const adaptedItem = adaptPipedApiStreamToVideoSource(pipedStream)

    adaptedList.push(adaptedItem)
  })

  return adaptedList
}
