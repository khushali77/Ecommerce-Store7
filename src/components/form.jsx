import React from "react";
import {Button,Form,Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function FormComponent(){
    return(
        <Form className="additemform">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter item name"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="Other">
                    <option>Other</option>
                    <option>Accesories</option>
                    <option>Electronics</option>
                    <option>Lifestyle</option>
                    <option>Clothing Men</option>
                    <option>Clothing Women</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="eg. 5" defaultValue="0" min="0"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUnits">
                <Form.Label>Units</Form.Label>
                <Form.Control type="number" placeholder="eg. 5" defaultValue="0" min="0"/>
                </Form.Group>
            </Form.Row>
        
            <Form.Row>
                <Form.Group as={Col} controlId="formGridDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridUrl">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" defaultValue="https://bit.ly/3hNmuBY"/>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Active" />
            </Form.Group>   

            <Link to='/backend'><Button variant="primary" type="submit" 
            onSubmit={(e)=>{
                console.log(e);
            }}>Add Item to Inventory</Button></Link>
        </Form>
    );
}

export default FormComponent;