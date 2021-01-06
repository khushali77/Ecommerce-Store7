import React from "react";
import {Jumbotron,Button,Card} from "react-bootstrap";
import {ProductList} from "ProductData";

function DisplayCard(props){
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.img} />
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text> Price : Rs {props.data.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </>
    );
}

function Home(){
    return(
    <>
    <Jumbotron className="jumbotron">
        <h1>Hello, This is the World's most reowned E-commerce store!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        {/* <p><Button variant="primary">Learn more</Button></p> */}
    </Jumbotron>
    <div className="DisplayItems">
        {ProductList.map(item=>(<li key={item.id}><DisplayCard data={item}/></li>))}
    </div>
    </>
    );
}

export default Home;