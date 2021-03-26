import React, { useState, useEffect } from "react"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";
import { loadData } from './GetJSONData';

function EntryForm() {
  const [madLib, setMadLib]  = useState()
  const [userInput, setInputData] = useState({enterNewWord: ""})
  const [userWord, UseWordsSet] = useState([])
  const [submitted, setSubmitted] = useState([])
  const { madLibTitle, imageURL, madLibText, subWords } = madLib ??{}

  useEffect(() => {
    let response
      (async () => {
        response = await fetch('./data.json')
        .then(response => response.json())
        .then(setMadLib(response))
        .then(console.log(madLib))
        .catch(err => console.error(err))
    })()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(prevArray =>
      [... prevArray,
        //here is a problem
      ])
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