import React from 'react'
import withTheme from './_withTheme'
import { Box, Flex } from '../src'

export default withTheme(() => (
  <Flex
    height='100%'
    flexDirection='column'
    alignItems='center'
    my={4}
    bg='green'
  >
    <Box children='Flex' />
  </Flex>
))
