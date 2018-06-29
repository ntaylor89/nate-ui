import React from 'react'
import Heading from './Heading'

const H5 = props =>
  <Heading
    is='h5'
    fontSize={2}
    mt={3}
    mb={2}
    {...props}
  />

H5.displayName = 'H5'

export default H5
