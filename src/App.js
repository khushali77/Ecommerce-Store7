import "./css/App.css";
import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "components/navbar";
import Home from "components/pages/home";
import Profile from "components/profile";
import Settings from "components/pages/settings";
import MyCart from "components/pages/mycart";
import MyOrders from "components/pages/myorders";
import Backend from "components/pages/backend";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Route exact path='/' component={Home}/>
     <Route exact path='/profile' component={Profile}/>
     <Route exact path='/settings' component={Settings}/>
     <Route exact path='/mycart' component={MyCart}/>
     <Route exact path='/myorders' component={MyOrders}/>
     <Route exact path='/backend' component={Backend}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
