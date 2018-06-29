import { Blockquote as Base } from 'rebass'
import styled from 'styled-components'

const Blockquote = styled(Base)({
  borderLeft: '3px solid'
})

Blockquote.defaultProps = {
  fontSize: 3,
  pl: 3,
  my: 4
}

Blockquote.displayName = 'Blockquote'

export default Blockquote
