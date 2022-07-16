import { PipedApi, Video as PipedVideo } from "piped-api"
import { adaptPipedVideos } from "../adapters/piped-api-video-adapter"

export class Fetcher {
  private pipedApi = new PipedApi()

  async fetchTrends() {
    const pipedVideos = await this.pipedApi.trends.fetch()
    if (pipedVideos === null) {
      return null
    }

    return adaptPipedVideos(pipedVideos)
  }
}
