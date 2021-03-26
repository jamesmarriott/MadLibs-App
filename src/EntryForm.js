import React, { useState, useEffect } from "react"
import { FormControl, Button, Container, Grid, Row, Col, Form } from "react-bootstrap";
import MadLibForm from "./MadLibForm"

function EntryForm() {

  const [madLib, setMadLib]  = useState()
  const [userInput, setInputData] = useState({enterNewWord: ""})
  const [userWord, UseWordsSet] = useState([])
  const [submitted, setSubmitted] = useState([])
  const [data, setData] = useState([])
  const [arrayData, setarrayData] = useState([])

  const getData=()=>{
    fetch('data.json',
    {headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    })
    .then(function(response){
    return response.json()
    })
    .then(function(myJson) {
    setData(myJson)
    })
  }

  useEffect(()=>{
    getData()
  },[])

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
    {data ?
      (() => {
        let splitArray = data[0].madLibText.split(" ")
        splitArray.map(item =>
          <div>item</div>)
        if (splitArray="Do") {
          return (
          <div>{splitArray}</div>
          )
          } else {
            return (
              <div>nogo</div>
            )
          }
      })() : null}
  </>
  )
}

        
/*       
      if {data.madLibText.split(" ") ? ) : null}
    </div>
    //   <input type="text" name="madLibTitle" value={madLibTitle} onChange={changeTitle}/>
    //   <h1>{subWords ? subWords.InpDefault: null}</h1>
    //   <form onSumbit={handleSubmit}>
    //       {subWords ? subWords.map(sub => (
    //         <input type="text" name={sub.SubId}
    //         value={sub.InpDefault}
    //         />
    //       )): null}
    //   </form>
    // </div> */

export default EntryForm
