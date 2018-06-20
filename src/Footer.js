import React from 'react'
import { Text, Small } from 'rebass'
import system from 'system-components'

const Base = system({
  is: 'footer',
  py: 4
})

const Footer = props =>
  <Base {...props}>
    <Small>
      <Text
        textAlign='center'
        color='gray'
       >
          Made with &lt;3 by Nate Taylor
      </Text>
    </Small>
  </Base>

export default Footer
