import React from 'react'
import { Nav } from 'react-bootstrap'

const listItens = ['Donations', 'Make a Donation']

export default function Links() {
  return(
    <Nav className="mr-auto">
      {
        listItens.map(item => {
          return (
            <Nav.Link href="#">{item}</Nav.Link>
          )
        })
      }
    </Nav>
  )
}