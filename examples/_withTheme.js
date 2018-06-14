import React from 'react'
import { ThemeProvider } from '../src'

export default Component => () =>
  <ThemeProvider>
    <Component />
  </ThemeProvider>
