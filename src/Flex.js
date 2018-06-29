import React from 'react'
import styled from 'styled-components'
import { height } from 'system-components'
import { Flex as Base } from 'rebass'

const Flex = styled(({
  height,
  ...props
}) => <Base {...props} />)`
  ${height}
`

Flex.displayName = 'Flex'

export default Flex
