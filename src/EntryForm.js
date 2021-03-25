import React, { useState, useEffect } from "react"
import jsonData from "./data.json"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";

function EntryForm() {
  const [madLib, setMadLib]  = useState()
  const [userInput, setInputData] = useState({enterNewWord: ""})
  const [userWord, UseWordsSet] = useState([])
  const { madLibTitle, imageURL, madLibText, subWords } = madLib ??{}

  useEffect(() => {
    setMadLib(jsonData)
  }, [])

  function handleSubmit() {
    alert("this happened")
  }

  function handleChange(event) {
    const {name, value} = event.target
    console.log(name, value)
    setMadLib(prevInput =>
      ({ ... prevInput,
        [name]: value})
    )
  }

  return (
  <form onSubmit={handleSubmit}>
    {subWords ? subWords.map(el =>
      <input
        type="text"
        placeHolder={el.InpDefault}
        name="enterNewWord"
        value={userInput.userInput}
        onChange={handleChange}
      />
    ) : null}
    <br/>
    <button>Get Mad!</button>
  </form>
  )}

export default EntryForm