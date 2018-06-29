import React from 'react'
import { Matrix } from '@compositor/kit'
import withTheme from './_withTheme'
import { Box, Container, theme } from '../src'

export default withTheme(() =>
  <Container>
    {Object.keys(theme.colors).map(key => (
      <Box key={key} bg={key}>{key}</Box>
    ))}
  </Container>
)
