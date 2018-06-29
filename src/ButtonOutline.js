import React from 'react'
import { ButtonOutline as Base } from 'rebass'

const ButtonOutline = props =>
  <Base
    px={3}
    py={2}
    {...props}
  />

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
