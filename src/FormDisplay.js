import React, { useState } from "react"
import { Card, Col, Container, Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormDisplay = ({ madLibTitle, imageURL, madLibText, subWords,  ...other }) => {

    const madLibTextArray = Array.from(madLibText.split(" "))

    const [madLib, setMadLib]  = useState()
    const [userInput] = useState({enterNewWord: ""})
    // const [submitted, setSubmitted] = useState([])
    const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
    const [isMadDisplayed, setIsMadDisplayed] = useState(false)

    const toggleMad = () => setIsMadDisplayed(!isMadDisplayed)

    
        
    // function handleSubmit(event) {
    //   event.preventDefault()
    //   setSubmitted(prevArray =>
    //     [... prevArray,
    //       // form validation setup
    //     ])
    // }

    function renderSwitch(InpType) {
      // switch statement that returns placeholder text based on the word type (noun/verb)
        switch(InpType) {
          case 11: return 'Adjective-General'
          case 12: return 'Adjective-Number'
          case 13: return 'Adjective-Color'          
          case 21: return 'Adverb-General'
          case 22: return 'Adverb-Time'          
          case 31: return 'Noun-Thing'          
          case 32: return 'Noun-Thing(plural)'          
          case 33: return 'Noun-Person'          
          case 34: return 'Noun-Person(plural)'          
          case 35: return 'Noun-Place(common)'          
          case 36: return 'Noun-Place(proper)'          
          case 37: return 'Noun-Animal'          
          case 38: return 'Noun-Animal(plural)'          
          case 39: return 'Noun-BodyPart'          
          case 310: return 'Noun-BodyPart(plural)'          
          case 41: return 'Verb-Present'          
          case 42: return 'Verb-Present(he/she/it)'          
          case 43: return 'Verb-Present(-ing)'          
          case 44: return 'Verb-Past'          
          case 45: return 'Verb-PastPart'          
          case 46: return 'Verb-Modal'          
          case 51: return 'Exclamation-General'          
          case 61: return 'First-Name'          
          case 62: return	'Second-Name'         
          default: return 'any word'
    }
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
            {!isMadDisplayed ?
              <Button variant="info" onClick={toggleMad}>Randomize!</Button> : null}
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
                            placeHolder={renderSwitch(sub.InpType)}
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
                    <span key={Id}> {word}
                    </span>
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