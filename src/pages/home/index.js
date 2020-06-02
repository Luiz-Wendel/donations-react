import React from 'react'
import Navegacao from '../../components/navegacao'
import Card from '../../components/card'
import Container from '../../components/container'

export default function Home() {
  return (
    <div>
      <Navegacao />
      <Container>
        <Card title='Food donation' user='Ze' content="I'm donating 5 canned soups" />
        <Card title='cloths donation' user='Dunno' content="I'm donating some winter cloths" />
        <Card title='Food donation' user='User' />
      </Container>
    </div>
  )
}
