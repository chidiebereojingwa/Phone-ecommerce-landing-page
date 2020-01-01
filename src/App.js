import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Login from './components/login.component';
import SignUp from './components/signup.component'
 
function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path='/sign-in' component={Login} />
      <Route path='/sign-up' component={SignUp} />
      <Route path="/cart" component={Cart} />
      <Route component={Default} />

    </Switch>
     
      
    </React.Fragment>
  );
}

export default App;
