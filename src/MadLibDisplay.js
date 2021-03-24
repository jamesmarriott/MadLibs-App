import React, { useState } from "react"
import { Button, Container, Grid, Row, Col } from "react-bootstrap";
import madLibData  from "./data";

const MadLibDisplay = (props) => {
    return (
      <>
        <Container fluid>
          {/* {madLibData.map((data, key) => {
            return(
              <div key={key}>
                {data.Sentence1[0].TextBeforeInput1}
                {data.Sentence1[0].InputType1}
                {data.Sentence1[0].TextAfterInput1}
              </div>
            )
          })} */}
        </Container>
      </>
    )
}

export default MadLibDisplay