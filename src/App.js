import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cart-items'
import AddItem from './components/add-item'
import CartPrice from './components/cart-price'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      products,
      cartItemsList
    }
  }

  addItem = (productName, quantity) => {
    const item = {
      id: this.state.cartItemsList.length + 1,
      product: { ...this.state.products.find(item => item.name === productName) },
      quantity
    }

    // const newCartItems = [
    //   ...this.state.cartItemsList,
    //   item
    // ]
    // this.setState({
    //   cartItemsList: newCartItems
    // })
    this.setState(prevState => ({
      cartItemsList: [
        ...prevState.cartItemsList,
        item,
      ]
    }))
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList} />
        <CartPrice cartItemsList={this.state.cartItemsList} />
        <AddItem products={this.state.products} onUpdateCartList={this.addItem} />
        <CartFooter copyright="2016" />
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
