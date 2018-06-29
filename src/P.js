import React from 'react'
import { Text } from 'rebass'

const P = props =>
  <Text
    is='p'
    my={2}
    {...props}
  />

P.displayName = 'P'

export default P
