import { MOCK_VIDEO } from "../mock/Video"
import {
  VideoUiFieldsGenerator,
  VideoUiFieldsGeneratorInstance,
} from "./VideoUiFieldsGenerator"

describe(VideoUiFieldsGenerator.name, () => {
  it("should generate text for views", () => {
    const thousand = 1_000
    const million = 1_000_000
    const billion = 1_000_000_000

    const billionsResult = VideoUiFieldsGeneratorInstance.generate({
      ...MOCK_VIDEO,
      views: billion * 2.226,
    })
    expect(billionsResult.fancyViews).toBe("2.23B")

    const millionsResult = VideoUiFieldsGeneratorInstance.generate({
      ...MOCK_VIDEO,
      views: million * 2.226,
    })
    expect(millionsResult.fancyViews).toBe("2.23M")

    const thousandsResult = VideoUiFieldsGeneratorInstance.generate({
      ...MOCK_VIDEO,
      views: thousand * 2.226,
    })
    expect(thousandsResult.fancyViews).toBe("2.23K")

    const lessThanThousandsResult = VideoUiFieldsGeneratorInstance.generate({
      ...MOCK_VIDEO,
      views: 444,
    })

    expect(lessThanThousandsResult.fancyViews).toBe("444")
  })

  it("should generate time", () => {
    {
      const seconds = 81_622
      const expectation = "22:40:22"

      expectTime(seconds, expectation)
    }

    {
      const seconds = 502
      const expectation = "08:22"

      expectTime(seconds, expectation)
    }

    function expectTime(seconds: number, expectation: string) {
      const { fancyTime } = VideoUiFieldsGeneratorInstance.generate({
        ...MOCK_VIDEO,
        durationInSeconds: seconds,
      })

      expect(fancyTime).toEqual(expectation)
    }
  })
})
