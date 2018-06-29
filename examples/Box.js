import React from 'react'
import withTheme from './_withTheme'
import { Box } from '../src'

export default withTheme(() => (
  <Box
    px={3}
    py={4}
    color='white'
    bg='blue'>
    Hello
  </Box>
))
