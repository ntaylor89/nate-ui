import React from 'react'
import Heading from './Heading'

const H3 = props =>
  <Heading
    is='h3'
    fontSize={4}
    mt={4}
    mb={3}
    {...props}
  />

H3.displayName = 'H3'

export default H3
