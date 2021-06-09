import { Card, Container } from "react-bootstrap"
import React from 'react'

export default function Header ({ madLibTitle, ...other }) {
  return (
    <>
      <Card.Header>
      <h1>MadLibz Generator!</h1>
        <p>Enter your own words by category. Or click 'fill random' to use the <strong>generator.</strong></p>
        <i class="fas fa-grin-tongue-wink"></i>
      </Card.Header>
      <br/>
      <Card.Header>
      <h2 style={{fontStyle: 'italic'}}>{madLibTitle}</h2>
      <br/>
    </Card.Header>
  </>
  )
}