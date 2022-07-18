import {
  AudioStream,
  Chapter,
  DetailedVideo as PipedDetailedVideo,
  SubtitlesItem,
  VideoStream,
} from "piped-api"
import { IDetailedVideo } from "../interface/DetailedVideo"
import { IVideo } from "../interface/Video"
import { adaptPipedVideos } from "./piped-api-video-adapter"

export class PipedApiToDetailedVideoAdapter implements IDetailedVideo {
  title: string

  description: string

  likes: number

  dislikes: number

  views: number

  thumbnailUrl: string

  channelName: string

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

  constructor(pipedVideo: PipedDetailedVideo) {
    const {
      audioStreams,
      chapters,
      dash,
      description,
      dislikes,
      duration,
      hls,
      likes,
      livestream,
      proxyUrl,
      relatedStreams,
      subtitles,
      thumbnailUrl,
      title,
      uploadDate,
      uploader,
      uploaderSubscriberCount,
      uploaderUrl,
      uploaderVerified,
      videoStreams,
      views,
    } = pipedVideo

    this.audioStreams = audioStreams
    this.chapters = chapters
    this.description = description
    this.dislikes = dislikes
    this.likes = likes
    this.isLivestream = livestream
    this.videoProvider = proxyUrl
    this.relatedVideos = adaptPipedVideos(relatedStreams)
    this.subtitles = subtitles
    this.thumbnailUrl = thumbnailUrl
    this.title = title
    this.epochSecondsSinceUpload = new Date(uploadDate).getTime() / 1000
    this.channelName = uploader
    this.subscribersCount = uploaderSubscriberCount
    this.isSubscribersHidden = uploaderSubscriberCount === -1
    this.channelUrl = uploaderUrl
    this.isChannelVerified = uploaderVerified
    this.videoStreams = videoStreams
    this.views = views
  }
}

export function adaptPipedDetailedVideoToDetailedVideo(
  pipedVideo: PipedDetailedVideo,
): IDetailedVideo {
  return new PipedApiToDetailedVideoAdapter(pipedVideo)
}
