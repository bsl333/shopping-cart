import React from 'react'

class CartPrice extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     cartItemsList: props.cartItemsList
  //   }
  // }

  render() {
    let costInCents = this.props.cartItemsList.reduce((acc, prod) => acc + prod.product.priceInCents * prod.quantity, 0)
    return (
      <div className="container">
        <p>
          Total Price: ${costInCents / 100}
        </p>
      </div>
    )
  }
}

export default CartPrice