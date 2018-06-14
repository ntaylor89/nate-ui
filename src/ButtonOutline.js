import React from 'react'
import { ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { buttonStyle } from 'styled-system'

export default styled(props =>
  <ButtonOutline
    px={3}
    py={2}
    {...props}
  />
)([], {
  whitespace: 'nowrap'
}, buttonStyle)
