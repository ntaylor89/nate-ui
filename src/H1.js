import React from 'react'
import Heading from './Heading'

const H1 = props =>
  <Heading
    is='h1'
    fontSize={6}
    mt={5}
    mb={3}
    {...props}
  />

H1.displayName = 'H1'

export default H1
