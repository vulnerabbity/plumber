export class VideoUiFieldsGenerator {
  generateViewsText({ views }: { views: number }): string {
    const THOUSAND = 1_000
    const MILLION = 1_000_000
    const BILLION = 1_000_000_000

    if (views > BILLION) {
      const billions = this.trimNumber(views / BILLION)

      return `${billions}B`
    }

    if (views > MILLION) {
      const millions = this.trimNumber(views / MILLION)

      return `${millions}M`
    }

    if (views > THOUSAND) {
      const thousands = this.trimNumber(views / THOUSAND)

      return `${thousands}K`
    }

    return String(views)
  }

  private trimNumber(number: number) {
    return number.toFixed(2)
  }
}

export const VideoUiFieldsGeneratorInstance = new VideoUiFieldsGenerator()
