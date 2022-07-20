import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import { RootStoreProvider } from "./store/store"
import { AppJssProvider } from "./lib/jss/jss-provider"
import { ThemeProvider } from "./components/theme-provider/ThemeProvider"

import "./styles/styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <AppJssProvider>
        <ThemeProvider>
          <App></App>
        </ThemeProvider>
      </AppJssProvider>
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
