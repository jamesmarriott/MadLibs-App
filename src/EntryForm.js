import React, { useState, useEffect } from "react"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";
import MadLibDisplay from "./MadLibDisplay";
import MadLibForm from "./MadLibForm"

const EntryForm = () => {

  const [madLib, setMadLib]  = useState()
  const [userInput, setInputData] = useState({enterNewWord: ""})
  const [userWord, UseWordsSet] = useState([])
  const [submitted, setSubmitted] = useState([])
  const [data, setData] = useState([])
  const [arrayData, setarrayData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
// useEffect.
  useEffect(()=>{
    getData();}
    ,[]);

// Separate function.
  async function getData() {
  const response = await fetch('data.json');
  const myJson = await response.json();
  setData(myJson)
  setIsLoading(false)
  }

  function handleSubmit() {
    alert("this happened")
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMadLib(prevInput => ({
        ... prevInput,
        [name] : value}))
  }

    
  return (
    <>
    <div>
    {isLoading ? <h1>Loading</h1> : <MadLibDisplay { ... data} />} 
    </div>
    </>
  )
  }

export default EntryForm
