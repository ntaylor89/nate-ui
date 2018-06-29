import React from 'react'
import withTheme from './_withTheme'
import { Box, Li } from '../src'

export default withTheme(() =>
  <Box is='ul'>
    <Li>Thing 1</Li>
    <Li>Thing A</Li>
    <Li>Thing Blue</Li>
  </Box>
)
