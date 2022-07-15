class ApiExtractor {
  /**
   * Extract channel id from url like:
   * /channel/:channelId
   */
  extractChannelIdFromUploaderUrl(url: string): string {
    const startPattern = "/channel/"
    const hasId = url.length > startPattern.length

    const isValidUrl = url.startsWith(startPattern) && hasId

    if (isValidUrl === false) {
      throw new ApiExtractorInvalidUrlError(url)
    }

    // splits to ["", ":id"]
    const chunks = url.split(startPattern)

    const id = chunks[1] ?? "id"

    return id
  }

  /**
   * Extracts videoId from video url like:
   * /watch?v=dQw4w9WgXcQ
   */
  extractVideoIdFromVideoUrl(url: string) {
    const startPattern = "/watch?v="
    const hasId = url.length > startPattern.length
    const isValidUrl = url.startsWith(startPattern) && hasId
    if (isValidUrl === false) {
      throw new ApiExtractorInvalidUrlError(url)
    }

    // splits to ["", ":id"]
    const chunks = url.split(startPattern)
    const id = chunks[1] ?? "id"

    return id
  }
}

class ApiExtractorError extends Error {
  constructor(message: string) {
    super(message)
  }
}

class ApiExtractorInvalidUrlError extends ApiExtractorError {
  constructor(url: string) {
    super(`${ApiExtractor.name} received invalid url ${url}`)
  }
}

const apiExtractor = new ApiExtractor()

export { apiExtractor as ApiExtractor }
