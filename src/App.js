//import dependencies
import React, { useState } from "react"
import { Button, Container, Grid, Row, Col } from "react-bootstrap";
import Header from "./Header"
import EntryForm from "./EntryForm"
import MadLibDisplay from "./MadLibDisplay"
import Footer from "./Footer"
import './App.css';

const App = () => {
  const [show, toggleShow] = useState (false)
    return (
       <>
          <Container fluid>
            <Row>
              <Col>
                  <EntryForm/>
              </Col>
            </Row>
            </Container>  
      </>
    )
}

export default App