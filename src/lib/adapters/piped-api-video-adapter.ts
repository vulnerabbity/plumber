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

  authorName: string

  uploadedIsoSeconds: number

  authorAvatarUrl: string | null

  channelId: string

  videoId: string

  isAuthorVerified: boolean

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
    this.authorName = uploaderName
    this.uploadedIsoSeconds = uploaded
    this.authorAvatarUrl = uploaderAvatar

    this.channelId = ApiExtractor.extractChannelIdFromUploaderUrl(uploaderUrl)
    this.videoId = ApiExtractor.extractVideoIdFromVideoUrl(url)
    this.isAuthorVerified = uploaderVerified
  }
}
