import React, { useState } from "react"
import { Button, Container, Grid, Row, Col } from "react-bootstrap";

const MadLibDisplay = ({ madLibTitle, imageURL, madLibText, subWords,  ... other }) => {

  
    // split the madLibText string into an array
    // split the subWords into an array
    // loop through the madLibText - if index number is the same as next subWords then swap it to input
    // if its not an input put in the word as normal

    return (
      <>
        <Container fluid>
          <h1>{madLibTitle}</h1>
          <p>{madLibText}</p>


        </Container>
      </>
    )
}

export default MadLibDisplay



