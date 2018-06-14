import React from 'react'
import {
  Box,
  Toolbar
} from '.'
import system from 'system-components'

const Header = system({ is: 'header' })

const NavBar = ({ logo, children, ...props}) =>
  <Header>
    <Toolbar
      px={3}
      py={2}
      color='black'
      bg='white'
      {...props}
    >
      {logo}
      <Box mx='auto' />
      {children}
    </Toolbar>
  </Header>

NavBar.defaultProps = {
  logo: 'X'
}

export default NavBar
