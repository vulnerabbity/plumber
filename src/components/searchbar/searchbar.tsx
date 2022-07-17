import { useState } from "react"
import { createUseStyles } from "react-jss"
import { Fetcher } from "../../lib/fetcher/Fetcher"
import { cssConstants } from "../../lib/jss/jss"

// TODO: add theme usage for component

export function SearchbarComponent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const styles = useStyles()

  const fetcher = new Fetcher()

  function handleSearch(query: string) {
    setSearchQuery(query)
    if (query) {
      receiveSuggestions(query)
    } else {
      setSuggestions([])
    }
  }

  async function receiveSuggestions(query: string) {
    const fetchedSuggestions = await fetcher.fetchSuggestions(query)
    if (fetchedSuggestions) {
      setSuggestions(fetchedSuggestions)
    }
  }

  function resetText() {
    setSearchQuery("")
    setSuggestions([])
  }

  const opacityOfSuggestions = isFocused ? 1 : 0

  return (
    <div className={styles.root}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Search"
          onChange={event => handleSearch(event.target.value)}
          onFocus={() => setIsFocused(true)}
          // on focus leave
          onBlur={() => setIsFocused(false)}
          value={searchQuery}
        ></input>
        <button
          className={styles.resetButton}
          onClick={resetText}
          aria-label="reset search text"
        >
          X
        </button>
      </div>

      <div
        className={styles.suggestions}
        style={{ opacity: opacityOfSuggestions }}
      >
        <ul>
          {suggestions.map(suggestion => {
            return (
              <li className={styles.suggestionItem} key={suggestion}>
                <a href="#">{suggestion}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: cssConstants.padding.medium,
    borderRadius: cssConstants.borderRadius.medium,

    backgroundColor: "gray",
    color: "white",
  },

  inputWrapper: {
    display: "flex",
  },

  resetButton: {
    position: "relative",
    left: -28,
    color: "white",
  },

  suggestions: {
    position: "absolute",
    width: "100%",
    top: 60,

    zIndex: 2,

    backgroundColor: "gray",
    borderRadius: cssConstants.borderRadius.medium,

    transition: cssConstants.transition.medium + "s",
  },
  suggestionItem: {
    color: "white",
    padding: cssConstants.padding.medium,
  },
})
