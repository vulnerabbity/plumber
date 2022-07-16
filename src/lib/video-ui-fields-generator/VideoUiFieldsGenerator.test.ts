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
      views: billion * 2.226,
    })
    expect(billionsResult.fancyViews).toBe("2.23B")

    const millionsResult = VideoUiFieldsGeneratorInstance.generate({
      views: million * 2.226,
    })
    expect(millionsResult.fancyViews).toBe("2.23M")

    const thousandsResult = VideoUiFieldsGeneratorInstance.generate({
      views: thousand * 2.226,
    })
    expect(thousandsResult.fancyViews).toBe("2.23K")

    const lessThanThousandsResult = VideoUiFieldsGeneratorInstance.generate({
      views: 444,
    })

    expect(lessThanThousandsResult.fancyViews).toBe("444")
  })
})
