import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { DataContext } from "../Context"
import "../css/Details.css"
import "../css/Cart.css"

class Cart extends Component {
    
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal()
    }

    render() {
        const { cart, decrease, increase, removeProduct, total } = this.context;

        if (cart.length === 0) {
            return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>
        } else {
            return (
                <section>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item.id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="colors">
                                        <p>{item.colors.map((color, id) => (
                                            <button key={id} style={{ background: color }}></button>
                                        ))}</p>
                                    </div>
                                    
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => decrease(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment"><a>Payment</a></Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </section>
            )

        }

    }
}

export default Cart
