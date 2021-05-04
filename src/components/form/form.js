import React, { useState, useEffect } from "react"
import { Card, Col, Container, Form, Button, FormGroup } from "react-bootstrap"
import { InputTypes } from "../../helpers/InputTypes.js"
// import { getRandomWord } from "../../helpers/getRandomWord.js"

export default function FormDisplay ({ madLibTitle, imageURL, madLibText, randWordList, subWords, ...other }) {

  const madLibTextArray = Array.from(madLibText.split(" "))
  const [userInput] = useState({enterNewWord: ""})
  const [madLib, setMadLib] = useState()
  const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
  const [isMadDisplayed, setIsMadDisplayed] = useState(false)
  const [isRandomActive, setIsRandomActive] = useState(false)
  const [isApiLoading, setIsApiLoading] = useState(true)

  const toggleMad = () => setIsMadDisplayed(!isMadDisplayed)

  function handleChange(event, sub) {
    const {name, value} = event.target
    setMadLib(prevInput =>
      ({ ...prevInput,
        [name]: value})
      )
    setMadTextDisplay(prevDisplay => {
      const newDisplay = [...prevDisplay]
      newDisplay[0][sub.InpPos-1] = value + sub.TrailingPunct
      return newDisplay
    })
  }

 function formSubmit(event, target) {

    
    console.log(event.value)
    // check all the boxes are filled
    // if not tell the user to complete form
    // disble button until all completed
    // then use router display madlib
  }

  const fillFormRandom = () => setIsRandomActive(!isRandomActive)

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

  return (
    <form onSubmit={formSubmit}>
      <FormGroup role="wordentry">
          <Form.Row className='align-items-center'>
              {Object.values(subWords).map(sub=>
                  <Col xs="auto">
                    <Form.Control 
                    size="lg"
                    key="sub.SubId"
                    type="text"
                    name={sub.SubId}
                    defaultValue={getRandomWord(sub.InpType)}
                    value={isRandomActive ? getRandomWord(sub.InpType) : null}
                    placeHolder={InputTypes(sub.InpType)}
                    onChange={(e) => {handleChange(e, sub)}}
                  />
                </Col>
              )}
          </Form.Row>
          <Button className="btn btn-primary btn-large centerButton" type="submit">Get Mad!</Button>
          <Button variant="info" onClick={fillFormRandom}>Randomize!</Button>
        </FormGroup>
      </form>
    )
  }