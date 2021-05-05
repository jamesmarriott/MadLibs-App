import React, { useState, useEffect } from "react"
import { Card, Col, Container, Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Displayer ({ madTextDisplay, imageURL, allSubPosArray }) {

  console.log(imageURL)

  return (
  <>
    <Card className="bg-dark text-white custom-card">
      <Card.Body style={{fontSize: 'max(1.4vw, 14px)'}}>
        <Card.Img className="op-img" src={imageURL} alt="Image behind text"/>
          <Card.ImgOverlay>
            <Card.Text>
              {madTextDisplay[0].map((word, Id) =>
              allSubPosArray.includes(Id+1) ?
              <span key={Id} style={{color: 'pink'}}><strong>{word} </strong></span> :
              <span key={Id}>{word} </span>
              )}
          </Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
  </>
 )
}