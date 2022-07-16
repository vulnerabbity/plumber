export interface VideoUiFieldsGeneratorProps {
  views: number
  durationInSeconds: number
}

export class VideoUiFieldsGenerator {
  generate(props: VideoUiFieldsGeneratorProps) {
    return {
      fancyViews: this.generateFancyViewsText(props),
      fancyTime: this.generateFancyTimeText(props),
    }
  }

  // generates time like 22:11:23, 02:22
  private generateFancyTimeText({
    durationInSeconds,
  }: VideoUiFieldsGeneratorProps) {
    const date = new Date(durationInSeconds * 1000)

    const seconds = date.getUTCSeconds()
    const minutes = date.getUTCMinutes()
    const hours = date.getUTCHours()

    let result = ""
    if (hours) {
      result += `${this.padNumber(hours)}:`
    }

    result += `${this.padNumber(minutes)}:`

    result += `${this.padNumber(seconds)}`

    return result
  }

  private generateFancyViewsText({
    views,
  }: VideoUiFieldsGeneratorProps): string {
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

  private padNumber(number: number, size = 2) {
    let stringNumber = number.toString()

    while (stringNumber.length < size) {
      stringNumber = "0" + stringNumber
    }

    return stringNumber
  }

  private trimNumber(number: number) {
    return number.toFixed(2)
  }
}

export const VideoUiFieldsGeneratorInstance = new VideoUiFieldsGenerator()
