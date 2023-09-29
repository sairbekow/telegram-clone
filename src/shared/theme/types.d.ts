import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {}

  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {}

  interface Palette {
    white: Palette['primary']
    info?: string
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary']
    info?: string
  }

  interface PaletteColor {
    text?: string
  }

  interface SimplePaletteColorOptions {
    background?: string
    text?: string
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
