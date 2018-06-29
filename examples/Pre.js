import React from 'react'
import withTheme from './_withTheme'
import { Pre } from '../src'

const code = `
  import React from 'react'
  import { Pre as Base } from 'rebass'

  const Pre = props =>
    <Base
      fontSize={2}
      my={3}
      p={2}
      bg='#f6f6fc'
      {...props}
    />
`

export default withTheme(() =>
  <Pre>
    {code}
  </Pre>
)
