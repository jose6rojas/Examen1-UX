import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
            <Switch>
              <Route path="/" component={ProductList} />
              <Route path="/detalles" component={Details} />
              <Route path="/carrito" component={Cart} />
              <Route component={Default} />
            </Switch>
      </React.Fragment>
    );
  }
}

export default App;
