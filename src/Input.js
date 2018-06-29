import React from 'react'
import { Input as Base } from 'rebass'

const Input = props =>
  <Base
    my={2}
    px={3}
    py={2}
    {...props}
  />

Input.displayName = 'Input'

export default Input
