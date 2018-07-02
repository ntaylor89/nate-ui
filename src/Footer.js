import React from 'react'
import { Box, Small, Text } from 'rebass'

const Footer = props =>
  <Box is='footer' py={4} {...props}>
    <Small>
      <Text textAlign='center'>
          Made with &lt;3 by Nate Taylor
      </Text>
    </Small>
  </Box>

export default Footer

