import React, { createElement } from 'react'
import * as components from '.'

const examples = Object.keys(components).map(key => ({
  name: key,
  element: createElement(components[key], { key })
}))

export default examples
