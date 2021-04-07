import React from "react"
import {  Jumbotron, Container } from "react-bootstrap";

const Header = () => {
    return (
      <>  <Container>
          <Jumbotron>
            <h1 className="header">Madlibs App!</h1>
          </Jumbotron>
          </Container>
      </>
    )
}

export default Header