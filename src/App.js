//import dependencies
import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import EntryForm from "./EntryForm"
import Header from "./Header"
import Footer from "./Footer"
import './App.css';

const App = () => {

    return (
       <>
          <Container fluid>
            <Header/>
              <Row>
                <Col>
                    <EntryForm/>
                </Col>
              </Row>
            <Footer/>
            </Container>  
      </>
    )
}

export default App