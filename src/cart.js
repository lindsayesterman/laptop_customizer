import React from 'react';
import CartList from './cartList'
import Total from './total.js'

class Cart extends React.Component {
    render() {
        return  (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartList selectedState={this.props.selectedState} USCurrencyFormat={this.props.USCurrencyFormat}/>
                <hr />
                <Total USCurrencyFormat={this.props.USCurrencyFormat} selectedState={this.props.selectedState}/>
            </section> 
        )

    }
}

export default Cart;