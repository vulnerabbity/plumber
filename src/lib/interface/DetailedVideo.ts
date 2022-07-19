import { AudioStream, Chapter, SubtitlesItem, VideoStream } from "piped-api"
import { IVideo } from "./Video"

export interface IDetailedVideo {
  title: string

  description: string

  likes: number

  dislikes: number

  views: number

  thumbnailUrl: string

  channelName: string

  channelAvatar: string

  subscribersCount: number

  isSubscribersHidden: boolean

  epochSecondsSinceUpload: number

  channelUrl: string

  isChannelVerified: boolean

  relatedVideos: IVideo[]

  audioStreams: AudioStream[]

  videoStreams: VideoStream[]

  subtitles: SubtitlesItem[]

  chapters: Chapter[]

  videoProvider: string

  isLivestream: boolean

  hls: string | null

  dash: string | null
}
