import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Backend(){
    return(
        <div className="backend">
            <h3 className="heading-1">EcommerceX Back Office</h3>
            <div className="heading-2">
                <h4>Inventory items</h4>
                <Link to='/backend/add'><Button variant="success" className="additembtn">Add Item</Button>{' '}</Link>
            </div>
            <div className="title">
                <p>id</p>
                <p>Item Name</p>
                <p>Description</p>
                <p>Category</p>
                <p>Price</p>
                <p>Units</p>
                <p>Active</p>
            </div>
        </div>
    );
}

export default Backend;