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

  componentDidMount() {
    this.getCartItemsLists()
  }

  getProductsLists = async () => {
    const productsResponse = await axios.get(`${apiUrl}/products`)
    return productsResponse.data
  }

  getCartItemsLists = async () => {
    const cartItemsListReponse = await axios.get(`${apiUrl}/items`)
    const products = await this.getProductsLists()
    
    const cartItemsList = cartItemsListReponse.data.map((item, idx) => {
      const [ prodObj ] = products.filter(prod => prod.id === item.product_id)
      return {
        id: idx + 1,
        product: prodObj,
        quantity: item.quantity
      }
    })

    this.setState({ products, cartItemsList })
  }

  addItem = async (body) => {
    await axios.post(`${apiUrl}/items`, body)
    this.getCartItemsLists()
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
  }
}

export default App;
