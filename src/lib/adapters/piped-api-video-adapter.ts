import { Video as PipedVideo } from "piped-api"
import { ApiExtractor } from "../api-extractor/ApiExtractor"
import { IVideo } from "../interface/Video"

/**
 * Converts from piped api video format with confusing properties names to more readable one
 */
export class PipedApiVideoAdapter implements IVideo {
  title: string

  description: string

  views: number

  durationInSeconds: number

  thumbnailUrl: string

  channelName: string

  uploadedIsoSeconds: number

  channelAvatarUrl: string | null

  channelUrl: string

  channelId: string

  videoId: string

  videoUrl: string

  isChannelVerified: boolean

  constructor(pipedVideo: PipedVideo) {
    const {
      duration,
      shortDescription,
      thumbnail,
      title,
      uploaded,
      uploadedDate,
      uploaderAvatar,
      uploaderName,
      uploaderUrl,
      uploaderVerified,
      url,
      views,
    } = pipedVideo

    this.title = title
    this.description = shortDescription ?? ""
    this.views = views
    this.durationInSeconds = duration
    this.thumbnailUrl = thumbnail
    this.channelName = uploaderName
    this.uploadedIsoSeconds = this.resolveIsoSeconds(pipedVideo)
    this.channelAvatarUrl = uploaderAvatar
    this.channelUrl = uploaderUrl
    this.videoUrl = url

    this.channelId = ApiExtractor.extractChannelIdFromUploaderUrl(uploaderUrl)
    this.videoId = ApiExtractor.extractVideoIdFromVideoUrl(url)
    this.isChannelVerified = uploaderVerified
  }

  private resolveIsoSeconds(pipedVideo: PipedVideo) {
    const uploadedIsoMilliseconds = pipedVideo.uploaded

    return Math.floor(uploadedIsoMilliseconds / 1000)
  }
}

export function adaptPipedVideos(pipedVideos: PipedVideo[]): IVideo[] {
  const adaptedVideos: IVideo[] = []

  pipedVideos.forEach(pipedVideo => {
    const adapted = new PipedApiVideoAdapter(pipedVideo)
    adaptedVideos.push(adapted)
  })

  return adaptedVideos
}
