import React from 'react'
import { Provider as Base } from 'rebass'
import styled from 'styled-components'
import defaultTheme from './theme'
import fillWindow from './_fillWindow'

const Provider = styled(Base)`
  height: ${props => props.fullscreen ? '100%' : 'auto'};
`

export default ({ theme = {}, ...props }) => {
  if (props.fullscreen) fillWindow(props.root)

  const { fonts: oldFonts, colors: oldColors, ...oldRest } = defaultTheme
  const { fonts: newFonts, colors: newColors, ...newRest } = theme
  const mergedTheme = {
    colors: { ...oldColors, ...newColors },
    fonts: { ...oldFonts, ...newFonts },
    oldRest,
    newRest
  }

  return (
    <Provider
      theme={mergedTheme}
      {...props}
    />
  )
}
