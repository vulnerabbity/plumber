export interface ThemeState {
  accentColor: string
  backgroundColor: string
  contentColor: string
}

export const initialThemeState: ThemeState = {
  accentColor: "red",
  backgroundColor: "#eee",
  contentColor: "#ccc",
}

export function themeReducer(
  state = initialThemeState,
  action: unknown,
): ThemeState {
  return state
}
