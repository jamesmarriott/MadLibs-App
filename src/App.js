//import dependencies
import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import GetJSON from "./GetJSON"
import Header from "./Header"
import Footer from "./Footer"
import './App.css';

const App = () => {

    return (
       <>
          <Container>
          {/* <Header/> */}
              <GetJSON/>
            {/* <Footer/> */}
          </Container>  
      </>
    )
}

export default App