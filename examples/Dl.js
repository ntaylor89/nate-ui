import React from 'react'
import withTheme from './_withTheme'
import {
  Dd,
  Dl,
  Dt
} from '../src'

export default withTheme(() =>
  <Dl textAlign='center'>
    <Dt display='none'>Title</Dt>
    <Dd>My Title</Dd>
  </Dl>
)
