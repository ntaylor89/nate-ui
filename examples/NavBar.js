import React from 'react'
import { NavBar, NavLink } from '../src'
import withTheme from './_withTheme'

export default withTheme(() =>
  <NavBar logo='My Site'>
    <NavLink href='/about' children='About' />
    <NavLink href='/posts' children='Posts' />
  </NavBar>
)
