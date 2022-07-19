import { IChannel } from "../interface/Channel"
import { IDetailedVideo } from "../interface/DetailedVideo"

export class DetailedVideoToChannelAdapter implements IChannel {
  name: string
  channelId: string
  avatarUrl: string
  subscribersCount: number
  isVerified: boolean

  constructor(detailedVideo: IDetailedVideo) {
    const {
      channelName,
      channelAvatar,
      channelId,
      subscribersCount,
      isChannelVerified,
    } = detailedVideo

    this.name = channelName
    this.channelId = channelId
    this.avatarUrl = channelAvatar
    this.subscribersCount = subscribersCount
    this.isVerified = isChannelVerified
  }
}

export function adaptDetailedVideoToChannel(
  detailedVideo: IDetailedVideo,
): IChannel {
  return new DetailedVideoToChannelAdapter(detailedVideo)
}
