import React from 'react'
import withTheme from './_withTheme'
import { NavBar, NavLink } from '../src'

export default withTheme(() =>
  <NavBar logo='My Site'>
    <NavLink href='/about' children='About' />
    <NavLink href='/posts' children='Posts' />
  </NavBar>
)
