import React, { useState, useEffect } from "react"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";

function EntryForm() {
  
  const [userWord, UseWordsSet] = useState([])

  function handleSubmit() {
  }

  function handleChange(event) {
    const {name, value} = event.target
    console.log(name, value)
    UseWordsSet(prevInput =>
      ({ ... prevInput,
        [name]: value})
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeHolder="word"
        name="userWord"
        value={userWord}
        onChange={handleChange}
      />
    </form>
  )

}

export default EntryForm