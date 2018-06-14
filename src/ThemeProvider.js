import React from 'react'
import { Provider } from 'rebass'
import theme from './theme'

export default props =>
  <Provider
    theme={theme}
    {...props}
  />
