import React from 'react'
import Heading from './Heading'

const H6 = props =>
  <Heading
    is='h6'
    fontSize={1}
    mt={3}
    mb={2}
    {...props}
  />

H6.displayName = 'H6'

export default H6
