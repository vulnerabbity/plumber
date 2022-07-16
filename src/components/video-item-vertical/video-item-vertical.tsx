import { IVideo } from "../../lib/interface/Video"

export interface VideoItemVerticalComponentProps {
  video: IVideo
}

export function VideoItemVerticalComponent(
  props: VideoItemVerticalComponentProps,
) {
  const { video } = props

  return <div></div>
}
