//delete this file

import React, { useState, useEffect } from "react"

export const GetJSON = () => {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    getData();}
    ,[]);

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
