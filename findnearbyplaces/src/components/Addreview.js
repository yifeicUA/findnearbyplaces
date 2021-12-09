import { Container,Fade,Badge, Row, Col, CardGroup,Button,Form, Card, Alert} from "react-bootstrap";
//import flowers from './flowers.js';
import { useEffect, useState } from "react";
const AddReview = (props) => {
    const onFormSubmit = e => {
        e.preventDefault();
  }
    return (
        <>
        <h1>
        Write Review <Badge bg="secondary">yelp</Badge>
        </h1>
        <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
            <Form.Control size="lg" type="text" placeholder="Write Review for..."  />
            <Form.Text className="text-muted">
                Please enter the name of a place Ex: McDonald's
            </Form.Text>
        </Form.Group>
    
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Category</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group as={Col}>
    <Form.Label>latitude</Form.Label>
    <Form.Control placeholder="32.222607" />
  </Form.Group>

  <Form.Group as={Col}>
    <Form.Label>longitude</Form.Label>
    <Form.Control placeholder="-110.974709" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Discription</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Update review if already exist" />
    </Form.Group>
  <div className="d-grid gap-2">
        <Button size="lg" variant="primary" type="submit">
            Submit
        </Button>
        </div>
    </Form>
    </>
        
    );

}
export default AddReview;