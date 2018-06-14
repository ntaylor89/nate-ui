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
  Image,
  Link,
  Pre,
  Text
} from '.'

const MD = {
  h1: heading(props =>
    <Heading
      {...props}
      is='h1'
      fontSize={6}
      mt={5}
      mb={3}
    />
  ),
  h2: heading(props =>
    <Heading
      {...props}
      is='h2'
      fontSize={4}
      mt={4}
      mb={3}
    />
  ),
  h3: heading(props =>
    <Heading
      {...props}
      is='h3'
      fontSize={3}
      mt={4}
      mb={3}
    />
  ),
  h4: heading(props =>
    <Heading
      {...props}
      is='h4'
      fontSize={2}
      mt={4}
      mb={3}
    />
  ),
  h5: heading(props =>
    <Heading
      {...props}
      is='h5'
      fontSize={1}
      mt={3}
      mb={2}
    />
  ),
  h6: heading(props =>
    <Heading
      {...props}
      is='h6'
      fontSize={1}
      mt={3}
      mb={2}
    />
  ),
  p: props =>
    <Text
      {...props}
      fontSize={3}
      mb={4}
    />,
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
