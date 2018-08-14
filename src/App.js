import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cart-items'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

class App extends Component {
  render() {

    return (
      <div> 
        <CartHeader />
        <CartItems items={cartItemsList} />
        <CartFooter copyright="2016"/>
      </div>
    )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
} 

export default App;
