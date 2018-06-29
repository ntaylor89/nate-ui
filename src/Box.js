import React from 'react'
import styled from 'styled-components'
import { height } from 'system-components'
import { Box as Base } from 'rebass'

const Box = styled(({
  height,
  ...props
}) => <Base {...props} />)`
  ${height}
`

Box.displayName = 'Box'

export default Box
