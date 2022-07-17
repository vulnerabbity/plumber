export class VideoUiFieldsGenerator {
  generateFancyPassedTime({
    secondsSinceEvent,
  }: {
    secondsSinceEvent: number
  }): string {
    const { seconds, minutes, hours, days, months, years } =
      this.spreadDate(secondsSinceEvent)

    if (years) {
      return `${years} years`
    }

    if (months) {
      return `${months} months`
    }

    if (days) {
      return `${days} days`
    }

    if (hours) {
      return `${hours} hours`
    }

    if (minutes) {
      return `${minutes} minutes`
    }

    return `${seconds} seconds`
  }

  /**
   * Generate time like: 22:11:23, 02:22
   */
  generateFancyTime({ durationInSeconds }: { durationInSeconds: number }) {
    const { hours, minutes, seconds } = this.spreadDate(durationInSeconds)

    let result = ""

    // if no hours: don't add
    if (hours) {
      result += `${this.padNumber(hours % 24)}:`
    }

    result += `${this.padNumber(minutes % 60)}:`

    result += `${this.padNumber(seconds % 60)}`

    return result
  }

  /**
   * Generate views like: 2.11K, 5.33M, 1.02B
   */
  generateFancyViews({ views }: { views: number }): string {
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

  private spreadDate(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    return { seconds, minutes, hours, months, years, days }
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
