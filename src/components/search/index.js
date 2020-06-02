import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

export default function Search() {
  return(
    <Form inline>
      <FormControl type="search" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  )
}