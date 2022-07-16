import React from "react"
import { createUseStyles } from "react-jss"
import { accessRootStore } from "../../store/store"

export interface ImageFallbackComponentProps {
  src?: string
  alt?: string
  fallbackHeight: number | string
}

export function ImageFallbackComponent(props: ImageFallbackComponentProps) {
  const { alt, src, fallbackHeight } = props
  const {
    state: { theme },
  } = accessRootStore()

  const styles = useStyles()

  return (
    <div
      className={styles.fallbackImageRoot}
      style={{ minHeight: fallbackHeight }}
    >
      <img className={`${styles.image}`} src={src} alt={alt} />
      <div
        className={`${styles.fallbackImage} ${styles.image}`}
        style={{ backgroundColor: theme.contentColor }}
        role="none"
      />
    </div>
  )
}

const useStyles = createUseStyles({
  fallbackImageRoot: {
    display: "block",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  fallbackImage: {
    height: "100%",
    width: "100%",
    zIndex: -1,
  },
})
