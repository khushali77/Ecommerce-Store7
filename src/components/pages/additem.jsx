import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function AddItem(){
    return(
        <div className="additem">
            <h3>Add new Item</h3>
            <hr size="2"></hr>
            <form class="additemform">
                <h5>Item Name</h5>
                <input type="text" name="name" required/><br></br>
                <h5>Description</h5>
                <input type="text" name="description" required/><br></br>
                <h5>Category</h5>
                <input type="text" name="category" /><br></br>
                <h5>Price</h5>
                <input type="number" name="price" /><br></br>
                <h5>Units</h5>
                <input type="number" name="units" /><br></br>
                <h5>Status</h5>
                <input type="text" name="status" /><br></br>
                <h5>Image</h5>
                <input type="text" name="image" required/><br></br><br></br>
                <Link to='/backend'><Button variant="primary" className="submitbtn">Add Item to Inventory</Button>{' '}</Link>
            </form>
        </div>
    );
}

export default AddItem;