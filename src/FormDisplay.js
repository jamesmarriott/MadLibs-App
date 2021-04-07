import React, { useState, useEffect } from "react"
import { Card, Col, Row, Container, Form, InputGroup, NavItem } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormDisplay = ({ madLibTitle, imageURL, madLibText, subWords,  ...other }) => {
    

    const madLibTextArray = Array.from(madLibText.split(" "))
    
    const [userWord, UseWordsSet] = useState([])
    const [madLib, setMadLib]  = useState()
    const [userInput, setInputData] = useState({enterNewWord: ""})
    const [submitted, setSubmitted] = useState([])
    const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
    const [isMadDisplayed, setIsMadDisplayed] = useState(false)

    const toggleMad = () => setIsMadDisplayed(!isMadDisplayed)
    
    function handleSubmit(event) {
      event.preventDefault()
      setSubmitted(prevArray =>
        [... prevArray,
          //here is a problem
        ])
    }
    // error checking - input field max length
  
    function handleChange(event, sub) {
      const {name, value} = event.target
      setMadLib(prevInput =>
        ({ ...prevInput,
          [name]: value})
        )
      setMadTextDisplay(prevDisplay => {
        const newDisplay = [...prevDisplay]
        newDisplay[0][sub.InpPos-1] = value
        return newDisplay
      })
      }

return (
        <Container>
            <h1 className="text-center">{madLibTitle}</h1>
            <div className="text-center">
            <br/>
              <Button variant="success" onClick={toggleMad}>{isMadDisplayed ? `Hide Mad!` : `Get Mad!`}</Button>
            </div>
            <br/>

          {!isMadDisplayed ? <div>
            <br />
                <Form className='align-items-center'>
                <Form.Row className='align-items-center'>
                    {Object.values(subWords).map(sub=>
                        <Col xs="auto">
                      <Form.Control
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
                  {/* <div className="text-center">
                      <Button type="submit">Get Mad!</Button>
                    </div> */}
                </Form>
                </div>
          : null}
          {isMadDisplayed ?
            <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Img src={imageURL}/>
              <Card.ImgOverlay>
              {/* <Card.Title>{madLibTitle}</Card.Title> */}
              <Card.Text>
              {madTextDisplay[0].map((word, Id) =>
              <span style={{fontSize : '32px'}} key={Id}> {word}
              </span>
              )}
              </Card.Text>
              </Card.ImgOverlay>
            </Card.Body>
          </Card> : null }
      </Container>
    )
}

export default FormDisplay



