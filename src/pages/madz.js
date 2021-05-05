//import dependencies
import React from "react"
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from "react-bootstrap";
import FormDisplay from "../components/form/form"
import MadzDisplay from "../components/displayer/displayer"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Madz () {
    return (
       <>
         <Container className="text-center">
             <Header></Header>
             <MadzDisplay></MadzDisplay>
             <Footer></Footer>
          </Container>
      </>
    )
}
