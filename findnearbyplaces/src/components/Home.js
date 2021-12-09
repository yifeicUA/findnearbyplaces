//import App from "../App";
import { Container,Fade,Badge, Row, Col, CardGroup,Button,Form, Card, Alert} from "react-bootstrap";
//import flowers from './flowers.js';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../communication/api";
const Home = (props) => {
    const onFormSubmit = e => {
        e.preventDefault();
  }
  const [open, setOpen] = useState(false);
    return (
        <>
        <h1>
        Find near by places: <Badge bg="secondary">yelp</Badge>
        </h1>
        <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
            <Form.Control size="lg" type="text" placeholder="Search..."  />
            <Form.Text className="text-muted">
                Please enter your search term Ex: McDonald's / Restaurant
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="save account number" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button size="lg" variant="primary" type="submit">
            Search
        </Button>
        </div>
        <div className="d-grid gap-2">
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
            variant="outline-danger"
        >
            help
        </Button>
        </div>
        <Fade in={open}>
        <div id="example-fade-text">
        <Alert key={"success"}>Please enter the query items according to your needs</Alert>
            You need a string containing the search term. A search term is a place name or a category name or part of a place name or part of a category name.

            And below, you have to give us your current location which should be whare you are now, you should enter a name of place

            radius: is Optional search radius in meters. a number

            category: is Optional category to filter search results, e.g., Restaurants, Shopping Centers, etc.

            sortBy: Optional sort mode: Best matched (0 - default), Minimum
        </div>
      </Fade>
        <Row><Alert key={"info"}>Please fill in the items below to assist in the search according to your needs</Alert></Row>
    
    <Form.Group className="mb-3">
      <Form.Label>Where are you?</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
    
    <Row className="mb-3">
    

    <Form.Group as={Col}>
      <Form.Label>Category(optional)</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group as={Col}>
    <Form.Label>radius(optional)</Form.Label>
    <Form.Control placeholder="1000" />
  </Form.Group>

  <Form.Group as={Col}>
    <Form.Label>sortBy(optional)</Form.Label>
    <Form.Select defaultValue="Choose...">
        <option>Best matched</option>
        <option>Minimum</option>
      </Form.Select>
  </Form.Group>
  </Row>
    </Form>
    </>
        
    );

}
export default Home;

    /*
    const [flowers, setFlowers] = useState([]);
    useEffect(() => {
        if(flowers.length > 0)return;
        api.getFlowers().then(x => setFlowers(x)).catch((e) => console.log(e));
    },[]
    );
    const {index, setNumber} = useState(0);
    const history = useHistory();
    let send =(event) =>{
        event.preventDefault();
        //alert(event.target.name);
        props.getIndex(event.target.name);
        history.push('/question')
    }
    let curr = [];
    for(var i=0; i<flowers.length; i++){
        curr.push(<Card >
            <Card.Link href = "#question"  value={flowers[i].name} onClick={send}>
            <Card.Img variant="top"  src={flowers[i].picture} name={flowers[i].name} onClick={send}/>
            </Card.Link>
            <Card.Body>
                <Card.Title>{flowers[i].name}</Card.Title>
            </Card.Body>
            </Card>);
    }
    //past.appendChild(curr);
    return (
        (curr)
    );
    */


    /*
    let past = document.createElement('div');;
    
    let numrow = 0;
    for(var i=0; i<flowers.length; i++){
        if(i%4==0){
            past.appendChild(curr);
            curr = document.createElement('Row');
        }
        let pcard =document.createElement('Card');
        let pcardimg = document.createElement('Card.Img');
        pcardimg.setAttribute('variant','top');
        pcardimg.src = flowers[i].picture;
        let pcardbod = document.createElement('Card.Body');
        let pcardtit = document.createElement('Card.Title');
        pcardtit.innerHTML = flowers[i].name;
        pcardbod.appendChild(pcardtit);
        pcard.appendChild(pcardimg);
        pcard.appendChild(pcardbod);
        curr.appendChild(pcard)
        */
        