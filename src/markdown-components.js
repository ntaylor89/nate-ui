import React from 'react'
import {
  heading,
  link
} from '@compositor/md'
import {
  Blockquote,
  Code,
  Divider,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  Link,
  P,
  Pre,
  Text
} from '.'

const MD = {
  h1: heading(props =>
    <H1 {...props} />
  ),
  h2: heading(props =>
    <H2 {...props} />
  ),
  h3: heading(props =>
    <H3 {...props} />
  ),
  h4: heading(props =>
    <H4 {...props} />
  ),
  h5: heading(props =>
    <H5 {...props} />
  ),
  h6: heading(props =>
    <H6 {...props} />
  ),
  p: props => (
    <P {...props} />
  ),
  a: link(props =>
    <Link
      {...props}
    />
  ),
  code: props =>
    <Code
      {...props}
      fontSize='inherit'
      bg='#f6f6fc'
    />,
  pre: props =>
    <Pre
      {...props}
      fontSize={2}
      my={3}
      p={2}
      bg='#f6f6fc'
    />,
  blockquote: props =>
    <Blockquote
      {...props}
    />,
  hr: props =>
    <Divider
      {...props}
    />,
  li: props =>
    <Text
      {...props}
      is='li'
      fontSize={3}
      mb={2}
    />,
  img: props =>
    <Image
      {...props}
      mb={3}
    />
}

export default MD
