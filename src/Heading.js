import React from 'react'
import { Heading as Base } from 'rebass'

const Heading = props =>
  <Base
    lineHeight={1.125}
    {...props}
  />

Heading.displayName = 'Heading'

export default Heading
