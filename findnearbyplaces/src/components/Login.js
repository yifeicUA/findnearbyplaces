//import App from "../App";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert,Card, Button, Form, Row} from 'react-bootstrap';
import { useEffect, useState } from "react";
import api from '../communication/api';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
    let [succed, setSucced] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    //const emailInput = ({target:{email}}) => setEmail(email);
    //const nameInput = ({target:{name}}) => setName(name);
    //const passwordInput = ({target:{password}}) => setPassword(password);
    const onFormSubmit = e => {
          e.preventDefault();
          console.log(email);
          console.log(password);
          api.getUser(email,password)
          //.then(x => x.json())
          .then(x => {
              console.log(x); 
              if(x.done==true){
                localStorage.setItem("customer",email);  
                setSucced("       Login successfully！！！(check console)");
                props.onAuthenticated();
                history.push({ pathname: '/' });}
              else{setSucced("       Login faild(check console)");}});
    }
    return (
        <><Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required />
                <Form.Text className="text-muted">
                    please enter your email address
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="save account number" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form><Row><Alert key={"info"}>Login with Email(show in console): {email}{succed}</Alert></Row></>
    );
}
export default Login;
/*
const Login = () => {
    return (
        <Card className="text-center">
            <Card.Header>Login</Card.Header>
            <Card.Body>
                <Card.Title>Enter your name</Card.Title>
                <Card.Text>Yifei Chen</Card.Text>
                <Button variant="primary">Login</Button>
            </Card.Body>
            <Card.Footer className="text-muted">you already login as Yifei</Card.Footer>
        </Card>
    );
}
export default Login;
*/