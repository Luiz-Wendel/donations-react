import React from 'react'
import { Navbar } from 'react-bootstrap'
import Links from '../links'
import Search from '../search'

export default function Navegacao() {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Donation React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Links />
        <Search />
      </Navbar.Collapse>
    </Navbar>
  )
}