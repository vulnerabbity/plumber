import { TextGenerator, TextGeneratorInstance } from "./TextGenerator"

describe(TextGenerator.name, () => {
  it("should generate text for views", () => {
    const thousand = 1_000
    const million = 1_000_000
    const billion = 1_000_000_000

    const textForBillions = TextGeneratorInstance.generateViewsText({
      views: billion * 2.226,
    })
    expect(textForBillions).toBe("2.23B")

    const textForMillions = TextGeneratorInstance.generateViewsText({
      views: million * 2.226,
    })
    expect(textForMillions).toBe("2.23M")

    const textForThousand = TextGeneratorInstance.generateViewsText({
      views: thousand * 2.226,
    })
    expect(textForThousand).toBe("2.23K")

    const textForLessThanThousand = TextGeneratorInstance.generateViewsText({
      views: 444,
    })
    expect(textForLessThanThousand).toBe("444")
  })
})
