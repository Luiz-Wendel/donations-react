import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const listItens = ['Donations', 'Make a Donation']

export default function Links() {
  return(
    <Nav className="mr-auto">
      {
        listItens.map(item => {
          return (
            <Link to="#">{item}</Link>
          )
        })
      }
    </Nav>
  )
}
