export * from "react-jss"

interface DefineAccessRatioProps {
  height: number
  aspectRatio: number
}

export function defineAspectRatio(props: DefineAccessRatioProps) {
  const { height, aspectRatio } = props

  const width = height * aspectRatio

  return { height, width }
}

export const cssConstants = {
  borderRadius: {
    small: 6,
    medium: 12,
    large: 18,
  },

  padding: {
    tiny: 2,
    smaller: 4,
    small: 6,
    medium: 12,
    large: 18,
  },

  baseFontSize: 18,
} as const
