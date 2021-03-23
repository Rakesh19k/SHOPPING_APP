import React from 'react'
import {Route, Router} from "react-router-dom"
import Details from './section/Details'
import Products from './section/Products'
import Cart from "./section/Cart"
import Payment from "./section/Payment"
import LoginRegister from './section/LoginRegister'
import Home from "./section/Home"


function Section() {
    return (
       <section>
            <Route path="/" component={Home} exact  />
            <Route path="/product" component={Products} exact  />
            <Route path="/product/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/login&register" component={LoginRegister} />
       </section>
    )
}

export default Section
