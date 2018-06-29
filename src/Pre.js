import React from 'react'
import { Pre as Base } from 'rebass'

const Pre = props =>
  <Base
    fontSize={2}
    my={3}
    p={2}
    bg='lightGray'
    {...props}
  />

Pre.displayName = 'Pre'

export default Pre
