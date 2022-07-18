import { VideoPlayerSource } from "../interface/VideoPlayerSource"

interface VideoJsSource {
  src: string
  type: string
}

export class VideoPlayerToVideoJsSourceAdapter implements VideoJsSource {
  src: string
  type: string

  constructor(videoSource: VideoPlayerSource) {
    this.src = videoSource.url
    this.type = videoSource.mimeType
  }
}

export function adaptVideoPlayerToVideoJsSource(
  videoPlayerSource: VideoPlayerSource,
): VideoJsSource {
  return new VideoPlayerToVideoJsSourceAdapter(videoPlayerSource)
}

export function adaptVideoPlayerToVideoJsSources(
  videoPlayerSources: VideoPlayerSource[],
) {
  const adaptedSources: VideoJsSource[] = []

  videoPlayerSources.forEach(source => {
    const adaptedSource = adaptVideoPlayerToVideoJsSource(source)

    adaptedSources.push(adaptedSource)
  })

  return adaptedSources
}
