import React from 'react'
import { Container } from 'rebass'

const Section = ({ measure, ...props }) =>
  <Container
    is='section'
    {...props}
  />

Section.displayName = 'Section'

export default Section
