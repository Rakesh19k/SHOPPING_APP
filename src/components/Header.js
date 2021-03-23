import React, {Component, useContext, createContext} from 'react'
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom"
import "./css/Header.css"
import  { DataContext } from "./Context"
import SHOE from "./svg/running-shoe.png"


class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            toggle: false
            
        }
        
    }
    static contextType = DataContext

    menuToggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    



    render () {
        const {toggle} = this.state
        const {cart} = this.context
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"  />
                </div>
                <div className="logo">
                    <h1><Link to="/"><img src={SHOE} width="35" style={{marginRight: 25}} />Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login&register">Login / Register</Link></li>
                        <li className="close"  onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20" />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

    
    


export default Header
