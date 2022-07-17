import { useEffect } from "react"
import { Fetcher } from "../../lib/fetcher/Fetcher"
import { ActionLoadTrends } from "../../store/actions/trends"
import { accessRootStore } from "../../store/store"
import { VideoItemsContainerComponent } from "../video-items-container/videoItemsContainer"

export function TrendsComponent() {
  const {
    state: { trends },
    dispatch,
  } = accessRootStore()

  async function fetchTrends() {
    const fetcher = new Fetcher()
    const fetchedTrends = await fetcher.fetchTrends()

    if (fetchedTrends) {
      dispatch(ActionLoadTrends({ videos: fetchedTrends }))
    }
  }

  useEffect(() => {
    fetchTrends()
  }, [])

  return (
    <VideoItemsContainerComponent
      videos={trends.videos}
    ></VideoItemsContainerComponent>
  )
}
