import React from 'react'
import styled from 'styled-components'
import { borderColor } from 'styled-system'
import { Divider as Base } from 'rebass'

const Divider = styled(({
  borderColor,
  ...props
}) => <Base {...props} />)`
  ${borderColor}
`

Divider.defaultProps = {
  my: 4,
  borderColor: 'inherit'
}

Divider.displayName = 'Divider'

export default Divider

