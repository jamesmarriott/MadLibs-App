import React, { useState, useEffect } from "react"
import MadLibDisplay from "./MadLibDisplay";

const EntryForm = () => {

  const [data, setData] = useState({})
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

  return (
    <>
    <div>
    {isLoading ? <h1>Loading</h1> : <MadLibDisplay { ... data} />} 
    </div>
    </>
  )
  }

export default EntryForm
