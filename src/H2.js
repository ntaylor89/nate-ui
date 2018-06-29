import React from 'react'
import Heading from './Heading'

const H2 = props =>
  <Heading
    is='h2'
    fontSize={5}
    mt={4}
    mb={3}
    {...props}
  />

H2.displayName = 'H2'

export default H2
