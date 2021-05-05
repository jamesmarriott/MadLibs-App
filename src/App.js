//import dependencies
import React from "react"
import { Home, Madz } from './pages'
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import FormDisplay from "./components/form/form"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import data from "./fixtures/madLibJSON.json"
import './App.css';

export function App() {
// if JSON is not null then display form
    return (
       <>
          <Router>
            <Switch>
              <Route exact path = "/"><Home/></Route>
              <Route path ="/madz"><Madz/></Route>
            </Switch>
          </Router>
      </>
    )
}


//