import React from 'react'
import { Library, Example } from '@compositor/kit'
import Blockquote from './Blockquote'
import Button from './Button'
import ButtonOutline from './ButtonOutline'
import Divider from './Divider'
import Dl from './Dl'
import Footer from './Footer'
import Headings from './Headings'
import Input from './Input'
import Middle from './Middle'
import NavBar from './NavBar'
import P from './P'
import Section from './Section'
import Select from './Select'

export default () =>
  <Library>
    <Example name='Blockquote'>
      <Blockquote />
    </Example>
    <Example name='Button'>
      <Button>Beep</Button>
    </Example>
    <Example name='ButtonOutline'>
      <ButtonOutline>Bloop</ButtonOutline>
    </Example>
    <Example name='Dl'>
      <Dl />
    </Example>
    <Example name='Divider'>
      <Divider />
    </Example>
    <Example name='Footer'>
      <Footer />
    </Example>
    <Example name='Headings'>
      <Headings />
    </Example>
    <Example name='Input'>
      <Input />
    </Example>
    <Example name='Middle'>
      <Middle />
    </Example>
    <Example name='NavBar'>
      <NavBar />
    </Example>
    <Example name='P'>
      <P />
    </Example>
    <Example name='Section'>
      <Section />
    </Example>
    <Example name='Select'>
      <Select />
    </Example>
  </Library>
