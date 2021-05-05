import React, { useState, useEffect } from "react"
import { Card, Col, Container, Form, Button, ButtonGroup, FormGroup } from "react-bootstrap"
import { InputTypes } from "../../helpers/InputTypes.js"
import  Displayer  from "../displayer/displayer"
// import { getRandomWord } from "../../helpers/getRandomWord.js"

export default function FormDisplay ({ madLibTitle, imageURL, madLibText, randWordList, subWords, ...other }) {

  const madLibTextArray = Array.from(madLibText.split(" "))
  const [userInput] = useState({enterNewWord: ""})
  const [madLib, setMadLib] = useState()
  const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
  const [isMadDisplayed, setIsMadDisplayed] = useState(false)
  const [isRandomActive, setIsRandomActive] = useState(false)
  const [isApiLoading, setIsApiLoading] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const allSubPosArray = []
  subWords.forEach(item => {
    allSubPosArray.push(item.InpPos)
  })

  const toggleMad = () => setIsMadDisplayed(!isMadDisplayed)
  const toggleForm = () => setFormSubmitted(!formSubmitted)

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
        event.preventDefault();
        for (let i=0; i<event.target.length; i++) {
          const subPos = allSubPosArray[i]
          const formValue = event.target[i].value
          setMadTextDisplay(prevDisplay => {
            const newDisplay = [...prevDisplay]
            newDisplay[0][subPos-1] = formValue
            return newDisplay
          }
          )
        }
      setFormSubmitted(!formSubmitted)
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
    <>
      {!formSubmitted ?
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
            <Button className="btn btn-primary btn-large centerButton" type="submit">Create</Button>
            <Button variant="info" onClick={fillFormRandom}>Random fill!</Button>
          </FormGroup>
        </form>
      : <Displayer madTextDisplay={madTextDisplay} imageURL={imageURL} allSubPosArray={allSubPosArray}/>}

      <container>
      <ButtonGroup>
        <Button variant="secondary" onClick={toggleForm}>Reset</Button>
        <Button variant="info" onClick={fillFormRandom}>Random fill!</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
      <br></br>
      </container>
      </>
    )
  }