import { ApiExtractor } from "./ApiExtractor"

describe("ApiExtractor", () => {
  it("should extract channel id from uploader url", () => {
    const EXPECTED_ID = "myExpectedId"
    const channelId = ApiExtractor.extractChannelIdFromUploaderUrl(
      "/channel/" + EXPECTED_ID,
    )
    expect(channelId).toBe(EXPECTED_ID)
  })

  it("should extract video id from video url", () => {
    const EXPECTED_ID = "dQw4w9WgXcQ"
    const url = `/watch?v=${EXPECTED_ID}`

    const extractedId = ApiExtractor.extractVideoIdFromVideoUrl(url)
    expect(extractedId).toBe(EXPECTED_ID)
  })
})
