import { useEffect, useRef, useState } from "react"
import { createUseStyles } from "react-jss"
import { accessRootStore } from "../../store/store"

export interface ImageFallbackComponentProps {
  className?: string
  src?: string
  alt?: string
  fallbackHeight: number
}

export function ImageFallbackComponent(props: ImageFallbackComponentProps) {
  const { alt, src, fallbackHeight, className } = props
  const {
    state: { theme },
  } = accessRootStore()
  const [height, setHeight] = useState(fallbackHeight)
  const imageRef = useRef<HTMLImageElement>(null)

  const styles = useStyles()

  // Placeholder should be same size as image.
  // When screen is resized they can have different size. For this reason we need sync
  useEffect(() => {
    const onResize = syncHeight
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  })

  function syncHeight() {
    const imageHeight = getImageHeight()

    setHeight(imageHeight)
  }

  function getImageHeight() {
    return imageRef.current?.height ?? 0
  }

  return (
    <div className={`${styles.fallbackImageRoot} ${className}`}>
      <div
        className={styles.fallbackBg}
        style={{ backgroundColor: theme.contentColor }}
      >
        <img
          className={styles.image}
          src={src}
          alt={alt}
          ref={imageRef}
          onLoad={() => {
            syncHeight()
          }}
        />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  image: {
    height: "100% !important",
  },

  fallbackBg: {
    height: "100%",
  },

  fallbackImageRoot: {
    display: "block",
    position: "relative",
  },
})
