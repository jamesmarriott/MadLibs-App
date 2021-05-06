import React, { useState, useEffect } from "react"
import { Card, Col, Container, Form, Button, ButtonGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormDisplay ({ madTextDisplay, imageURL, allSubPosArray, subWords, randWordList }) {

  const [madDisplayer, setMadDisplayer] = useState([madTextDisplay])
  
  const refreshPage = ()=>{
    window.location.reload();
 }
  
  const toggleForm = () => {}


  function getRandomWord(sub) {
    let randWord = ""
    Object.values(randWordList).map(value => {
      if (value.id === sub) {
        const randomIndex = Math.floor(Math.random() * value.words.length)
        randWord = value.words[randomIndex]
      }
    })
  return randWord
  }

  function fillMadRandom() {
    setMadDisplayer(prevDisplay => {
        const newDisplay = [...prevDisplay]
            Object.values(subWords).map(item => {
            const randWord = getRandomWord(item.InpType)
            const pos = item.InpPos-1
            newDisplay[0][0][pos] = randWord + item.TrailingPunct
          })
          return newDisplay
        })
      }

  return (
  <>
    <Card className="bg-dark text-white custom-card">
      <Card.Body style={{fontSize: 'max(1.4vw, 14px)'}}>
        <Card.Img className="op-img" src={imageURL} alt="Image behind text"/>
          <Card.ImgOverlay>
            <Card.Text>
              {madTextDisplay[0].map((word, Id) =>
              
              allSubPosArray.includes(Id+1) ?
              <span key={Id} style={{color: 'pink'}}><strong>{word} </strong></span> 
              
              :
              <span key={Id}>{word} </span>
              )}
          </Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
      <ButtonGroup style={{padding: "10px"}}>
        <Button variant="info" onClick={fillMadRandom}>Randomize</Button>
        <Button variant="warning" onClick={refreshPage}>Restart</Button>
      </ButtonGroup>
  </>
 )
}
