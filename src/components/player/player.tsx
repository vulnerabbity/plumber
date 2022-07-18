import { VideoJsComponent, VideoJsComponentProps } from "./videoJs"
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from "video.js"
import { EmptyVideoJsComponent } from "./videojsPlugins/EmptyVideoJsComponent"
import "./player.scss"
import ReactDom from "react-dom"
import { VideoTopBar } from "./TopBar"
import { VideoBottomBar } from "./BottomBar"
import { createUseStyles } from "react-jss"
import { useRef } from "react"

export interface VideoPlayerComponentProps {}

export function VideoPlayerComponent(props: VideoPlayerComponentProps) {
  const options: VideoJsPlayerOptions = {
    sources,
    muted: true,
    controlBar: false,
    fluid: true,
  }

  const styles = useStyles()

  function addBottomBar(player: VideoJsPlayer) {
    const id = "plumber-video-bottom-bar"
    const className = "video-bottom-bar"
    addVideoJsNode({ className, id, player })

    ReactDom.render(
      <VideoBottomBar
        onFullscreen={() => toggleFullscreen(player)}
      ></VideoBottomBar>,
      document.querySelector(`#${id}`),
    )
  }

  return (
    <div className={styles.plumberPlayer}>
      <VideoJsComponent
        videoJsOptions={options}
        thumbnailUrl={thumbnailUrl}
        onReady={({ player, isFirstInit }) => {
          if (isFirstInit === false) {
            return
          }

          addTopBar(player)
          addBottomBar(player)
        }}
      ></VideoJsComponent>
    </div>
  )
}

const useStyles = createUseStyles({
  plumberPlayer: {
    maxWidth: 1200,
  },
})

function toggleFullscreen(player: VideoJsPlayer) {
  const isFullscreen = player.isFullscreen()

  if (isFullscreen) {
    player.exitFullscreen()
  } else {
    player.requestFullscreen()
  }
}

function addTopBar(player: VideoJsPlayer) {
  const id = "plumber-video-top-bar"
  const className = "video-top-bar"
  addVideoJsNode({ className, id, player })

  ReactDom.render(<VideoTopBar></VideoTopBar>, document.querySelector(`#${id}`))
}

function addVideoJsNode(props: {
  id: string
  className: string
  player: VideoJsPlayer
}) {
  const { className, id, player } = props

  videojs.registerComponent(id, EmptyVideoJsComponent)
  player.addChild(id, { className, id })
}
