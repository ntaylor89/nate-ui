import React from 'react'
import {
  Box,
  Toolbar
} from 'rebass'

const NavBar = ({
  children,
  logo,
  ...props
}) => (
  <Box is='header'>
    <Toolbar
      px={4}
      pt={3}
      color='inherit'
      bg='inherit'
      alignItems='center'
      {...props}
    >
      {logo}
      <Box mx='auto' />
      {children}
    </Toolbar>
  </Box>
)

NavBar.defaultProps = {
  logo: 'Nate Taylor'
}

export default NavBar
