import React from 'react'
import {
  Blockquote,
  Code,
  Divider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  Li,
  Link,
  P,
  Pre
} from '.'

const MD = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  p: props => <P {...props} />,
  a: props => <Link {...props} />,
  code: props => <Code {...props} />,
  pre: props => <Pre {...props} />,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Divider {...props} />,
  li: props => <Li {...props} />,
  img: props =>
    <Image
      {...props}
      mb={3}
    />
}

export default MD
