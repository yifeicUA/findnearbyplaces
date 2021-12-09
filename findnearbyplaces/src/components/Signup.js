//import App from "../App";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert,Card, Button, Form, Row} from 'react-bootstrap';
import { useEffect, useState } from "react";
import api from '../communication/api';
const Signin = () => {
    let [succed, setSucced] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    //const emailInput = ({target:{email}}) => setEmail(email);
    //const nameInput = ({target:{name}}) => setName(name);
    //const passwordInput = ({target:{password}}) => setPassword(password);
    const onFormSubmit = e => {
          e.preventDefault();
          console.log(email);
          console.log(name);
          console.log(password);
          succed = api.setUser(name,email,password).then(x => {console.log(x); setSucced("       Sign up successfully！！！");});
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
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="username" onChange={e => setName(e.target.value)}  required />
                <Form.Text className="text-muted">
                    please enter your username
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
                Sign up
            </Button>
        </Form>
        <Row><Alert key={"info"}>Sign up with username(show in console): {name}{succed}</Alert></Row>
        </>
    );
}
export default Signin;

/*
<Card className="text-center">
            <Card.Header>Sign In</Card.Header>
            <Card.Body>
                <Card.Title>Enter your name</Card.Title>
                <Card.Text>Yifei Chen</Card.Text>
                <Button variant="primary">Sign in</Button>
            </Card.Body>
            <Card.Footer className="text-muted">the name will be your username</Card.Footer>
        </Card>
*/