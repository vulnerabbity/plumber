export interface IVideo {
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
}
