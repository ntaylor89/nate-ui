import React from 'react'
import Base from './Heading'

const SubHead = props =>
  <Base
    is='h3'
    fontSize={4}
    {...props}
  />

SubHead.displayName = 'SubHead'

export default SubHead
