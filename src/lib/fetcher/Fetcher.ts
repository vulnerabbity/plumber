import { PipedApi, Video as PipedVideo } from "piped-api"
import { adaptPipedVideos } from "../adapters/piped-api-video-adapter"
import { adaptPipedDetailedVideoToDetailedVideo } from "../adapters/PipedApiToDetailedVideo"
import { IDetailedVideo } from "../interface/DetailedVideo"

export class Fetcher {
  private pipedApi = new PipedApi()

  async fetchTrends() {
    const pipedVideos = await this.pipedApi.trends.fetch()
    if (pipedVideos === null) {
      return null
    }

    return adaptPipedVideos(pipedVideos)
  }

  async fetchSuggestions(query: string) {
    const suggestions = await this.pipedApi.suggestions.getSuggestions(query)

    return suggestions
  }

  async fetchDetailedVideo(videoId: string): Promise<IDetailedVideo | null> {
    const pipedDetailedVideo = await this.pipedApi.video.fetch({ videoId })

    if (pipedDetailedVideo) {
      const adapted = adaptPipedDetailedVideoToDetailedVideo(pipedDetailedVideo)

      return adapted
    }

    return null
  }
}
