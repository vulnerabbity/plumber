export interface IVideo {
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
}
