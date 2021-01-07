import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Backend(){
    return(
        <div className="backend">
            <div className="title">
                <h4>Inventory Items</h4>
                <Link to='/backend/add'><Button variant="success" className="additembtn">Add Item</Button>{' '}</Link>
            </div>
            <table className="itemstable">
                <tr>
                    <th>Id</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Units</th>
                    <th>Status</th>
                </tr>
            </table>
        </div>
    );
}

export default Backend;

