import React, { useState, useEffect } from "react"
import { NavItem } from "react-bootstrap"
// import displayInput from "./displayInput";

const MadLibDisplay = ({ madLibTitle, imageURL, madLibText, subWords,  ...other }) => {

    
    const madLibTextArray = Array.from(madLibText.split(" "))


    const [userWord, UseWordsSet] = useState([])
    const [madLib, setMadLib]  = useState()
    const [userInput, setInputData] = useState({enterNewWord: ""})
    const [submitted, setSubmitted] = useState([])
    const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])
    
    function handleSubmit(event) {
      event.preventDefault()
      setSubmitted(prevArray =>
        [... prevArray,
          //here is a problem
        ])
    }
  
    function handleChange(event, sub) {
      const {name, value} = event.target

      setMadLib(prevInput =>
        ({ ...prevInput,
          [name]: value})
        )
      setMadTextDisplay(prevDisplay => {
        const newDisplay = [...prevDisplay]
        newDisplay[0][sub.InpPos-1] = value
        console.log(newDisplay)
        return newDisplay
      })
      }

return (
        <div>
        <form onSubmit={handleSubmit}>
          <h1>{madLibTitle}</h1>
          {madTextDisplay[0].map((word, Id) =>
          <span key={Id}> {word}
          </span>  
          )}
          {Object.values(subWords).map(sub=>
            <input key="sub.SubId"
            type="text"
            name={sub.SubId}
            value={userInput.userInput}
            placeHolder={sub.InpDefault}
            onChange={(e) => {handleChange(e, sub)}}
          />
          )}
        <button>Get Mad!</button>
        </form>
        </div>
    )
}

export default MadLibDisplay



