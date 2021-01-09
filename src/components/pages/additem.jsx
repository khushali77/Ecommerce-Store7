import React from "react";
import FormComponent from "components/form";

function AddItem(){
    return(
        <div className="additem">
            <h3>Add new Item</h3>
            <hr size="2"></hr>
            <FormComponent/>
        </div>
    );
}

export default AddItem;