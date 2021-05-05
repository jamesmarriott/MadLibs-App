//import dependencies
import React, {useState,useEffect} from "react"
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from "react-bootstrap";
import FormDisplay from "../components/form/form"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import data from "../fixtures/madLibJSON.json"

export default function Home () {
  const [isApiLoading, setIsApiLoading] = useState(true)
  const [randWordList, setRandWordList] = useState({})

  useEffect(()=>{
    apiCaller();
  },[]);

  async function apiCaller() {
    const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
    const randWords = await wordPromise.json()
    setRandWordList(randWords)
  }

// if JSON is not null then display form
    return (
       <>
         <Container className="text-center">
             <Header {...data }></Header>
                {data && randWordList ? 
                  <FormDisplay {...data} randWordList={randWordList} />
                  : null }
              <Footer></Footer>
          </Container>
      </>
    )
}
