import React from 'react'
import { Matrix } from '@compositor/kit'
import withTheme from './_withTheme'
import { Button } from '../src'

export default withTheme(() => (
  <Matrix component={Button}
    x={[
      { children: 'Default', primary: true },
      { children: 'Secondary', secondary: true },
      { chldren: 'Error', error: true }
    ]}
    y={[
      { size: 'small' },
      { size: 'medium' },
      { size: 'large' }
    ]}
  />
))
