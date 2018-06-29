import React from 'react'
import withTheme from './_withTheme'
import { Container, Select } from '../src'

export default withTheme(() =>
  <Container pt={2}>
    <Select>
      <option>Hi</option>
      <option>There</option>
    </Select>
  </Container>
)
