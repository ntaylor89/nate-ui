import { theme } from 'rebass'

export const colors = {
  ...theme.colors,
  text: '#282828',
  black: '#282828',
  gray: '#647171',
  lightGray: '#f6f6fc',
  white: '#fff',
  green: '#0CE890',
  blue: '#07c',
  navy: '#004175',
}

export const fonts = {
  ...theme.fonts,
  sans: '"Avenir Next", Helvetica, sans-serif',
  mono: 'Menlo, monospace',
  system: 'system-ui, sans-serif'
}

export const fontSizes = [
  12,
  14,
  16,
  24,
  32,
  48,
  64,
  96
]

export default {
  ...theme,
  colors,
  fonts,
  fontSizes
}
