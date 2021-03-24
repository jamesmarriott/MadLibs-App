import React, { useState, useEffect } from "react"
import jsonData from "./data.json"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";

const EntryForm = () => {
    
      const [madLib, setMadLib]  = useState()

      useEffect(() => {
        setMadLib(jsonData[0])
      }, [])

      const handleChange = ((id, event) => {
        const newElement = { ... madLib}
        console.log(newElement)
      })

      const { madLibTitle, imageURL, madLibText, subWords } = madLib ??{}
      
      return (
         
            <Container fluid>
            <h3>{madLibTitle}</h3>
            </Container>

    )
}

export default EntryForm


// {jsonData.map((data, key) => {
//   return(
//     <div key={key}>
//       {data.MadLibTitle}<br/>
//       {data.MadLibText}<br/>
//       <p>
//       {data.SubWords.map(sub => (
//         <input type="text" label="noun" value={sub.InpDefault} placeHolder="text" onChange={(e) => {setWord(e.target.value)}}/>
//       )
//       )}