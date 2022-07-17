import { VideoUiFieldsGenerator } from "./VideoUiFieldsGenerator"

describe(VideoUiFieldsGenerator.name, () => {
  const generator = new VideoUiFieldsGenerator()

  it("should generate text for views", () => {
    const thousand = 1_000
    const million = 1_000_000
    const billion = 1_000_000_000

    const billionFancyViews = generator.generateFancyViews({
      views: billion * 2.226,
    })
    expect(billionFancyViews).toBe("2.23B")

    const millionsFancyViews = generator.generateFancyViews({
      views: million * 2.226,
    })
    expect(millionsFancyViews).toBe("2.23M")

    const thousandsFancyViews = generator.generateFancyViews({
      views: thousand * 2.226,
    })
    expect(thousandsFancyViews).toBe("2.23K")

    const lessThanThousandsFancyViews = generator.generateFancyViews({
      views: 444,
    })

    expect(lessThanThousandsFancyViews).toBe("444")
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
      const fancyTime = generator.generateFancyTime({
        durationInSeconds: seconds,
      })

      expect(fancyTime).toEqual(expectation)
    }
  })
})
