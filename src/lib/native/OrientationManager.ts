import { ScreenOrientation } from "@awesome-cordova-plugins/screen-orientation"

export class OrientationsManager {
  static lockToLandscape() {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.LANDSCAPE)
  }

  static lockToPortrait() {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)
  }

  static lock() {
    ScreenOrientation.unlock()
  }

  static getCurrentOrientation() {
    return ScreenOrientation.type
  }
}
