import React, { useState, useEffect } from "react"
import { Card, Col, Container, Form } from "react-bootstrap"
import { InputTypes } from "./helpers/InputTypes.js"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormDisplay = ({ madLibTitle, imageURL, madLibText, subWords,  ...other }) => {

    const madLibTextArray = Array.from(madLibText.split(" "))
    const allSubPosArray = []
    subWords.forEach(item => {
      allSubPosArray.push(item.InpPos)
    })
    const [isRandomActive, setIsRandomActive] = useState(false)
    const [madLib, setMadLib]  = useState()
    const [userInput] = useState({enterNewWord: ""})
    // const [submitted, setSubmitted] = useState([])
    const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
    const [isMadDisplayed, setIsMadDisplayed] = useState(false)
    const [randWords, setRandWords] = useState([])
    const [isApiLoading, setIsApiLoading] = useState(true)

    const toggleMad = () => setIsMadDisplayed(!isMadDisplayed)

    useEffect(()=>{
      wordsFromApi();
    },[]);
  
    useEffect(()=>{
      console.log(isRandomActive)
    },[isRandomActive]);
    
    async function wordsFromApi() {
    const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
    const getWordList = await wordPromise.json()
    setRandWords(getWordList)
    setIsApiLoading(false)
    }

  function getRandomWord() {

  }

  function randomize() {
    let randWord = ''
    setMadTextDisplay(prevDisplay => {
      const newDisplay = [...prevDisplay]
      Object.values(subWords).map(sub => {
        Object.values(randWords).map(value => {
          if (value.id === sub.InpType) {
            const randomIndex = Math.floor(Math.random() * value.words.length)
            randWord = value.words[randomIndex] + sub.TrailingPunct
          }
        })
        newDisplay[0][sub.InpPos-1] = randWord
      })
      return newDisplay
      }
    )
    setIsRandomActive(true)
  }


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

return (
        <Container className="text-center">
            <Card.Header>
            <h1>MadLibz!</h1>
              <p>Enter words - adjectives, nouns etc. - using the form below and click 'Create' to make a funny story.</p>
            </Card.Header>
            <br/>
            <Card.Header>
            <h2 style={{fontStyle: 'italic'}}>{madLibTitle}</h2>
            <br/>
            <Button variant="primary" onClick={toggleMad}>{isMadDisplayed ? `Reset!` : `Create`}</Button>            
            {isApiLoading ?
              <Button variant="info" disabled>...Loading</Button>
            : <Button variant="info" onClick={randomize}>Randomize!</Button>}
            <br/>

            </Card.Header>

          {!isMadDisplayed ? <div>
            <br />
                <Form>
                  <Form.Row className='align-items-center'>
                      {Object.values(subWords).map(sub=>
                          <Col xs="auto">
                            <Form.Control 
                            size="lg"
                            key="sub.SubId"
                            type="text"
                            name={sub.SubId}
                            value={userInput.userInput}
                            defaultValue={isRandomActive ? getRandomWord(sub.InpType) : null}
                            placeHolder={InputTypes(sub.InpType)}
                            onChange={(e) => {handleChange(e, sub)}}
                          />
                        </Col>
                      )}
                  </Form.Row>
                  {/* Grab words from API based on category/ autofill / use handleChange? */}
                </Form>
                </div>
          : null}

          {isMadDisplayed ?
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
          </Card> : null }
          <br/>
          <Card.Footer className="text-muted text-center">App developed with React Hooks. More features and MadLibz coming soon! Help develop the API.  Contact: <Card.Link href="https://github.com/jamesmarriott/">James Marriott</Card.Link> </Card.Footer>
      </Container>
    )
}

export default FormDisplay