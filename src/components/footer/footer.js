import { Card } from "react-bootstrap"
import React from 'react'

export default function Footer () {
  return (
    <>
        <Card.Footer className="text-muted text-center">App developed with React Hooks. More features and MadLibz coming soon! Help develop the API.  Contact: <Card.Link href="https://github.com/jamesmarriott/">James Marriott</Card.Link> </Card.Footer>
  </>
  )
}