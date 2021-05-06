import { Card, ButtonGroup } from "react-bootstrap"
import React from 'react'

export default function Footer () {

  const Reset = () => {}

  return (
    <>
        <Card.Footer className="text-muted text-center">App developed with React Hooks. More MadLibz coming soon! <Card.Link href="https://github.com/jamesmarriott/">Github</Card.Link> </Card.Footer>
  </>
  )
}