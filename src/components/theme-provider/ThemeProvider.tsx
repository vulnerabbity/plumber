import { ReactNode } from "react"
import { createUseStyles } from "react-jss"
import { cssConstants } from "../../lib/jss/jss"
import "./ThemeProvider.scss"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const styles = useStyles()

  return <div className={styles.themeProvider}>{children}</div>
}

const useStyles = createUseStyles({
  themeProvider: {
    fontSize: cssConstants.baseFontSize,
  },
})
