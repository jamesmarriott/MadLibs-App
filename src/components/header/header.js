import { Card, Container } from "react-bootstrap"
import React from 'react'

export default function Header ({ madLibTitle, ...other }) {
  return (
    <>
      <Card.Header>
      <h1>MadLibz!</h1>
        <p>Enter words - adjectives, nouns etc. - using the form below and click 'Create' to make a funny story.</p>
      </Card.Header>
      <br/>
      <Card.Header>
      <h2 style={{fontStyle: 'italic'}}>{madLibTitle}</h2>
      <br/>
    </Card.Header>
  </>
  )
}