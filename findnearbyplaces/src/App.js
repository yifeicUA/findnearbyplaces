
//import logo from './logo.svg';
import Home from './components/Home';
import Signin from './components/Signup';
import Login from './components/Login';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';
//import React from 'react';
import {
  //BrowserRouter as router,
  HashRouter,
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory
  //Link
}from "react-router-dom";
import { Container, Row, Col, Alert } from 'react-bootstrap';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./communication/api";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let onCustomerAuthenticated = () => {
    setIsAuthenticated(true);
  }


  const [number, setNumber] = useState(undefined);
  const [grade, setGrade] = useState(0);
  localStorage.setItem("customer",undefined);  
  let index = 0;

  let getnumIndex = (picIndex) => {
    setNumber(picIndex);
    
  }
  let updateGrade = (Grade) => {
    setGrade(grade+Grade);
    //alert(grade);
    
  }
  //alert(number);
  return (
    <HashRouter>
      <Container>
        <Row>
          <Col><Menu customerAuthenticated={isAuthenticated} /></Col>
        </Row>
        <Switch>
          <Route path="/sign">
            <Signin />
          </Route>
          <Route path="/login">
            <Login onAuthenticated={onCustomerAuthenticated} />
          </Route>
          <Route path="/">
            <Home getIndex={getnumIndex} />
          </Route>
        </Switch>

      </Container>
    </HashRouter>
  );
}

let PrivateRoute = ({ children, ...rest }) => {
  let customer = localStorage.getItem('customer');
  console.log(customer=="undefined");
  /*
  if(customer=="undefined"){
    window.location.replace("/login")
  }
  */
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer!="undefined" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

let Twitter = (props) => {
  let { username, name } = useParams();
  let history = useHistory();
  
  useEffect(() => {
    console.log('in Twitter ...');
    api.verifyTwitter(username)
      .then(x => {
        console.log(x);
        if (x.done) {
          localStorage.setItem('customer', name);
          props.onAuthenticated();
        }
      });
  });
  
  
  
    return (
      <Home />
    );
  }
export default App;




/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/