import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Cards(props) {
  return(
    <Card style={{ width: '18rem' }} className="mx-3 my-2">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-muted">
          De: {props.user}
        </Card.Text>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="success">Entrar em contato</Button>
      </Card.Body>
    </Card>
  )
}

Cards.defaultProps = {
  title: 'Donation',
  user: 'Anonymous',
  content: "I'm donating this"
}
