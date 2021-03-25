import React, { useState, useEffect } from "react"
import jsonData from "./data.json"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";

const EntryForm = () => {
    
      const [madLib, setMadLib]  = useState()
      const [inputs, setInputs] = useState()

      useEffect(() => {
        setMadLib(jsonData)
      }, [])

      const { madLibTitle, imageURL, madLibText, subWords } = madLib ??{}

      function handleChange (event) {
        const {name, value} = event.target
        setMadLib(prevValue =>  ({
              ... prevValue,
              name: value
              }
            )
        )
        }

      return (
        <div>
          <input type="text" name="madLibTitle" value={madLibTitle} onChange={changeTitle}/>
          <h1>{subWords ? subWords.InpDefault: null}</h1>
          <form onSumbit={handleSubmit}>
              {subWords ? subWords.map(sub => (
                <input type="text" name={sub.SubId}
                value={sub.InpDefault}
                />
              )): null}
          </form>
        </div>


    )
}

export default EntryForm