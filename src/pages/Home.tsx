import { createUseStyles } from "react-jss"
import { Link } from "react-router-dom"
import { SearchbarComponent } from "../components/searchbar/searchbar"
import { TrendsComponent } from "../components/trends/trends"

import "./Home.scss"

export function Home() {
  const styles = useStyles()

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>
          <Link to="/">Plumber</Link>
        </h1>
        <div className={styles.searchbar}>
          <SearchbarComponent></SearchbarComponent>
        </div>
        <span></span>
      </header>
      <TrendsComponent></TrendsComponent>
    </div>
  )
}

const useStyles = createUseStyles({
  home: {},
  searchbar: {
    maxWidth: 700,
  },
  header: {
    color: "black",
    minHeight: 65,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0 25rem",
  },
})
