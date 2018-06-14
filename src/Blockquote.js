import React from 'react'
import { Blockquote } from 'rebass'
import styled from 'styled-components'

const Base = styled(Blockquote)({
  borderLeft: '3px solid'
})

export default props =>
  <Base
    fontSize={3}
    pl={3}
    my={4}
    {...props}
  />
