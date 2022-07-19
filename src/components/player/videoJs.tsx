import { useEffect, useRef, useState } from "react"
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js"
import "video.js/dist/video-js.css"

// @ts-ignore
// Disable video.js spy features
window.HELP_IMPROVE_VIDEOJS = false

export type OnReadyCallback = (response: OnReadyResponse) => any
export type OnReadyResponse = {
  player: VideoJsPlayer

  /**
   * When reloaded in developing mode may be initialized many times
   */
  isFirstInit: boolean
}

export interface VideoJsComponentProps {
  thumbnailUrl: string
  videoJsOptions?: VideoJsPlayerOptions
  onReady?: OnReadyCallback
}

export function VideoJsComponent(props: VideoJsComponentProps) {
  const { videoJsOptions = {}, thumbnailUrl } = props
  const [isFirstInit, setIsFirstInit] = useState(true)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef(null)
  let player: VideoJsPlayer | null = null

  function onPlayerLoad(player: VideoJsPlayer) {
    if (props.onReady) {
      props.onReady({ player, isFirstInit })
    }
  }

  function initPlayer() {
    // should be always defined if has video tag on jsx return with ref "videoRef"
    const videoElement = videoRef.current!

    // Make sure player created once
    if (player) {
      return
    }

    createPlayer(videoElement)
  }

  function createPlayer(videoElement: HTMLVideoElement) {
    player = videojs(videoElement, videoJsOptions, () => {
      onPlayerLoad(player!)
    })

    if (isFirstInit) {
      setIsFirstInit(false)
    }
  }

  useEffect(() => {
    initPlayer()
  }, [videoJsOptions, player])

  return (
    <div data-vjs-player ref={playerRef}>
      <video
        ref={videoRef}
        className="video-js"
        controls
        preload="auto"
        poster={thumbnailUrl}
        data-setup="{}"
      ></video>
    </div>
  )
}
