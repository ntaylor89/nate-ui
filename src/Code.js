import React from 'react'
import { Code as Base } from 'rebass'

const Code = props =>
  <Base
    fontSize='inherit'
    bg='lightGray'
    {...props}
  />

Code.displayName = 'Code'

export default Code
