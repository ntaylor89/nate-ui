import React from 'react'
import { Text } from 'rebass'

const Li = props =>
  <Text
    is='li'
    fontSize={3}
    mb={2}
    {...props}
  />

Li.displayName = 'Li'

export default Li
