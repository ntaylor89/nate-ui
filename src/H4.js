import React from 'react'
import Heading from './Heading'

const H4 = props =>
  <Heading
    is='h4'
    fontSize={3}
    mt={4}
    mb={3}
    {...props}
  />

H4.displayName = 'H4'

export default H4
