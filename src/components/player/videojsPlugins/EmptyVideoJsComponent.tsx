import videojs, { VideoJsPlayer } from "video.js"

const VJS_Component = videojs.getComponent("Component")

interface EmptyVideoJsComponentOptions {
  className: string
  id?: string
}

/**
 * Allows to add dom node to player
 */
export class EmptyVideoJsComponent extends VJS_Component {
  constructor(player: VideoJsPlayer, options: EmptyVideoJsComponentOptions) {
    const { className } = options

    if (typeof className !== "string") {
      throw new Error(`${EmptyVideoJsComponent.name} should have className`)
    }

    super(player, options)
  }

  override createEl() {
    const { className, id } = this.options_ as EmptyVideoJsComponentOptions

    return videojs.dom.createEl("div", {
      className,
      id: id ?? String(Math.random()),
    })
  }
}
