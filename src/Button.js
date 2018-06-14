import React from 'react'
import { Button } from 'rebass'
import styled from 'styled-components'
import { buttonStyle } from 'styled-system'

export default styled(props =>
  <Button
    bg='blue'
    px={3}
    py={2}
    borderRadius={4}
    {...props}
  />
)([], {
  whiteSpace: 'nowrap'
}, buttonStyle)
