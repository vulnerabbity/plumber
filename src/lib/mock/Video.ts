import { Video as PipedVideo } from "piped-api"
import { PipedApiVideoAdapter } from "../adapters/piped-api-video-adapter"
import { IVideo } from "../interface/Video"

export const MOCK_PIPED_VIDEO: PipedVideo = {
  url: "/watch?v=dQw4w9WgXcQ",
  title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
  thumbnail:
    "https://pipedproxy.kavin.rocks/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfut6ib46TKYWnNm5PxBrcX8HLWg&host=i.ytimg.com",
  uploaderName: "Rick Astley",
  uploaderUrl: "/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
  uploaderAvatar:
    "https://pipedproxy.kavin.rocks/BbWaWU-qyR5nfxxXclxsI8zepppYL5x1agIPGfRdXFm5fPEewDsRRWg4x6P6fdKNhj84GoUpUI4=s88-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
  uploadedDate: "12 years ago",
  shortDescription:
    "“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick's ...",
  duration: 213,
  views: 1249707820,
  uploaded: 1279206000000,
  uploaderVerified: true,
} as const

export const MOCK_VIDEO: IVideo = new PipedApiVideoAdapter(MOCK_PIPED_VIDEO)
