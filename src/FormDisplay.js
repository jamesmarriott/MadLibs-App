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
      console.log(madTextDisplay)
      }


return (
        <Container className="text-center">
            <Card.Header>
            <h1>MadLibz!</h1>
            <h2>{madLib}</h2>
            {/* <h5>A <Card.Link href="https://en.wikipedia.org/wiki/Mad_Libs">MadLibz app</Card.Link></h5> */}
            <p>Enter words - adjectives, nouns etc. - using the form below and click 'Create' to make a funny story.</p>
            </Card.Header>
            <br/>
            <Card.Header>
            <h2 style={{fontStyle: 'italic'}}>{madLibTitle}</h2>
            <br/>
            <Button variant="primary" onClick={toggleMad}>{isMadDisplayed ? `Reset!` : `Create`}</Button>
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
                      placeHolder={sub.SubId + " " + sub.InpDefault}
                      onChange={(e) => {handleChange(e, sub)}}
                    />
                      </Col>
                    )}
                </Form.Row>
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