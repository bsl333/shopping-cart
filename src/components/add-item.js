import React from 'react'



class AddItem extends React.Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     products: this.props.products
  //   }
  // }

  handleSubmit = async (e) => {
    e.preventDefault()
    const productName = e.target.products.value
    const quantity = e.target.quantity.value
    const id = this.props.products.find(prod => prod.name === productName).id
    const body = {
      product_id: id,
      quantity
    }
    
    this.props.onUpdateCartList(body)
    
    

  }

  render() {
    return (
      <form className="container" onSubmit = { this.handleSubmit }>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control" id="quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="products">Products</label>
          <select className="form-control" id="products" name="products" >
            {this.props.products.map((product) => <option key={product.id} name="option">{product.name}</option>)}
          </select>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddItem