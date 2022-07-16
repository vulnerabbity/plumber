import { create as createJss } from "jss"
import defaultUnit from "jss-plugin-default-unit"
import { ReactNode } from "react"
import { JssProvider as _LibJssProvider } from "react-jss"
import camelCasePlugin from "jss-plugin-camel-case"
import nestedPlugin from "jss-plugin-nested"

// JssProvider has bug in types so its not recognizable as provider
const LibJssProvider: any = _LibJssProvider

interface AppJssProviderProps {
  children: ReactNode
}

export function AppJssProvider({ children }: AppJssProviderProps) {
  const jss = createJss()
  const unitsConfig = getJssDefaultUnitConfig("rem")

  jss.use(defaultUnit(unitsConfig), camelCasePlugin(), nestedPlugin())
  return (
    <>
      <LibJssProvider jss={jss}>{children}</LibJssProvider>
    </>
  )
}

/**
 * Jss default unit for some reason has no option "just use rem for all"
 * to use rems it need explicit config
 */
function getJssDefaultUnitConfig(unit: string) {
  return {
    backgroundPositionX: unit,
    backgroundPositionY: unit,
    backgroundSize: unit,
    border: unit,
    borderBottom: unit,
    borderBottomLeftRadius: unit,
    borderBottomRightRadius: unit,
    borderBottomWidth: unit,
    borderLeft: unit,
    borderLeftWidth: unit,
    borderRadius: unit,
    borderRight: unit,
    borderRightWidth: unit,
    borderSpacing: unit,
    borderTop: unit,
    borderTopLeftRadius: unit,
    borderTopRightRadius: unit,
    borderTopWidth: unit,
    borderWidth: unit,
    bottom: unit,
    columnGap: unit,
    columnRule: unit,
    columnRuleWidth: unit,
    cx: unit,
    cy: unit,
    flexBasis: unit,
    fontSize: unit,
    height: unit,
    left: unit,
    letterSpacing: unit,
    margin: unit,
    marginBottom: unit,
    marginLeft: unit,
    marginRight: unit,
    marginTop: unit,
    maxHeight: unit,
    maxWidth: unit,
    minHeight: unit,
    minWidth: unit,
    motion: unit,
    motionOffset: unit,
    outline: unit,
    outlineOffset: unit,
    outlineWidth: unit,
    padding: unit,
    paddingBottom: unit,
    paddingLeft: unit,
    paddingRight: unit,
    paddingTop: unit,
    r: unit,
    right: unit,
    rx: unit,
    ry: unit,
    shapeMargin: unit,
    size: unit,
    textIndent: unit,
    top: unit,
    verticalAlign: unit,
    borderAfterWidth: unit,
    borderBeforeWidth: unit,
    borderEndWidth: unit,
    borderHorizontalSpacing: unit,
    borderStartWidth: unit,
    borderVerticalSpacing: unit,
    fontSizeDelta: unit,
    logicalHeight: unit,
    logicalWidth: unit,
    marginAfter: unit,
    marginBefore: unit,
    marginEnd: unit,
    marginStart: unit,
    maskPositionX: unit,
    maskPositionY: unit,
    maskSize: unit,
    maxLogicalHeight: unit,
    maxLogicalWidth: unit,
    minLogicalHeight: unit,
    minLogicalWidth: unit,
    paddingAfter: unit,
    paddingBefore: unit,
    paddingEnd: unit,
    paddingStart: unit,
    textStroke: unit,
    textStrokeWidth: unit,
    width: unit,
    wordSpacing: unit,
    x: unit,
    y: unit,
  }
}
