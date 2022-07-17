import { VideoUiFieldsGenerator } from "./VideoUiFieldsGenerator"

describe(VideoUiFieldsGenerator.name, () => {
  const generator = new VideoUiFieldsGenerator()

  it("should generate fancy passed time", () => {
    const MINUTE = 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    const MONTH = DAY * 30
    const YEAR = MONTH * 12

    expectTimePassed(30, "30 seconds")
    expectTimePassed(8 * MINUTE, "8 minutes")
    expectTimePassed(2.1 * HOUR, "2 hours")
    expectTimePassed(3.6 * DAY, "3 days")
    expectTimePassed(2.1 * MONTH, "2 months")
    expectTimePassed(3.5 * YEAR, "3 years")

    function expectTimePassed(seconds: number, expectedResult: string) {
      const result = generator.generateFancyPassedTime({
        secondsSinceEvent: seconds,
      })

      expect(result).toBe(expectedResult)
    }
  })

  it("should generate fancy views", () => {
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

  it("should generate fancy time", () => {
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
