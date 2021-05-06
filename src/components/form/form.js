import React, { useState, useEffect, useRef } from "react"
import { Tooltip, Card, Col, Container, Form, Button, ButtonGroup, FormGroup, Alert} from "react-bootstrap"
import { InputTypes } from "../../helpers/InputTypes"
import  Displayer  from "../displayer/displayer"

export default function FormDisplay ({ madLibTitle, imageURL, madLibText, randWordList, subWords, ...other }) {

  const madLibTextArray = Array.from(madLibText.split(" "))
  const [userInput] = useState({enterNewWord: ""})
  const [ formValid, setFormValid ] = useState()
  const [madLib, setMadLib] = useState()
  const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
  const [isMadDisplayed, setIsMadDisplayed] = useState(false)
  const [isRandomActive, setIsRandomActive] = useState(false)
  const [isApiLoading, setIsApiLoading] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [ formError, setFormError ] = useState(false)
  const allSubPosArray = []
  const [show, setShow] = useState(true);
  const target = useRef(null);
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
      console.log(sub)
      newDisplay[0][sub.InpPos-1] = value + sub.TrailingPunct
      return newDisplay
    })
  }


function validateForm(event, target){
  for (let i=0; i < event.target.length-2; i++) {
    if (event.target[i].value.length != 0) {
      console.log('valid entry' + i)
    } else return false
  }
  setFormValid(true)
  return true
}


 function formSubmit(event, target) {
        event.preventDefault();
        if (validateForm(event, target)) {
        for (let i=0; i<event.target.length-2; i++) {
          const subPos = allSubPosArray[i]
          const formValue = event.target[i].value
          setMadTextDisplay(prevDisplay => {
            const newDisplay = [...prevDisplay]
            newDisplay[0][subPos-1] = formValue + subWords[i].TrailingPunct
            return newDisplay
          }
          )
        setFormSubmitted(true)
        }} 
        else return setFormError(true)
     }

  const fillFormRandom = () => setIsRandomActive(!isRandomActive)

  const Reset = () => {}

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
                      readOnly={isRandomActive ? true : false}
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
            <ButtonGroup style={{padding: "10px"}}>
               <Button ref={target} className="btn btn-primary btn-large centerButton" type="submit">Create</Button>
            <Button variant="info" onClick={fillFormRandom}>Fill Random</Button>
            </ButtonGroup>
            {formError ?      
          
            <Alert variant="danger">
            <Alert.Heading>Please complete all text fields</Alert.Heading>
            </Alert> : null}
            
          </FormGroup>
        </form>
      : <Displayer madTextDisplay={madTextDisplay} imageURL={imageURL} allSubPosArray={allSubPosArray} subWords={subWords} randWordList={randWordList}/>}
      </>
    )
  }