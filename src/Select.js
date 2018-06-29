import React from 'react'
import { Select as Base } from 'rebass'

const Select = props =>
  <Base
    px={3}
    py={2}
    {...props}
  />

Select.displayName = 'Select'

export default Select
