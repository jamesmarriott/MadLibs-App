import React, { useState, useEffect } from "react"
import FormDisplay from "./FormDisplay";

const GetJSON = () => {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
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
    {isLoading ? <h1>Loading</h1> : <FormDisplay { ... data} />} 
    </div>
    </>
  )
  }

export default GetJSON
