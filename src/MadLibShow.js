import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

const MadLibShow = ({ madLibTextArray }) => {

  const [madTextDisplay, setMadTextDisplay] = useState([madLibTextArray])

  console.log(madTextDisplay) 

  return (
    <div>
    {/* {madTextDisplay[0].map((word, Id) =>
    <span key={Id}> {word}
    </span>
    )} */}
  </div>
  )
}

export default MadLibShow