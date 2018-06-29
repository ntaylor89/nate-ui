import React from 'react'
import { Provider } from '../src'

export default Component => () =>
  <Provider>
    <Component />
  </Provider>
