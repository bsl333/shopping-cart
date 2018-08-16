import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartHeader from './components/header'
import CartFooter from './components/footer'
import CartItems from './components/cart-items'
import AddItem from './components/add-item'
import CartPrice from './components/cart-price'
import axios from 'axios'

const apiUrl = `http://localhost:8082/api`
const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      products,
      cartItemsList
    }
  }

  async componentDidMount() {
    const productsResonse = await axios.get(`${apiUrl}/products`)
    const cartItemsListReponse = await axios.get(`${apiUrl}/items`)

    const cartItemsList = cartItemsListReponse.data.map((item, idx) => {
      let [prodObj] = productsResonse.data.filter(prod => prod.id === item.product_id)
      return {
        id: idx + 1,
        product: prodObj,
        quantity: item.quantity
      }
    })

    this.setState({
      products: productsResonse.data,
      cartItemsList: cartItemsList
    })
  }

  addItem = (productName, quantity) => {
    const item = {
      id: this.state.cartItemsList.length + 1,
      product: { ...this.state.products.find(item => item.name === productName) },
      quantity
    }
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
