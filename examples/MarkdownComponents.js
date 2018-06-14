import React, { Fragment } from 'react'
import { Box, MD } from '../src'
import withTheme from './_withTheme'

const voids = {
  hr: true,
  img: true
}

export default withTheme(() =>
  <Box>
    <MD.h1 id='Markdown'>
      Markdown Components
    </MD.h1>
    <MD.p id='Paragraph'>
      Markdown Paragraph
    </MD.p>
    {Object.keys(MD).map(key =>
      <Fragment>
        {React.createElement(
          MD[key], { id: key, key }, voids[key] ? null : `Hello, ${key}`)}
        <br />
      </Fragment>
    )}
  </Box>
)
