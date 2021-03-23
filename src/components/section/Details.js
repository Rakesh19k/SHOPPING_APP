import React, { Component } from 'react'
import { DataContext } from "../Context"
import { Link } from "react-router-dom"
import "../css/Details.css"
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';


class Details extends Component {

    static contextType = DataContext;

    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item.id === this.props.match.params.id;
            })
            // console.log(data)
            this.setState({
                product: data
            })
        }
    }

    componentDidMount() {
        this.getProduct();
    }
    


    render() {
        //  console.log(this.context.products)
        const { product } = this.state;
        const { addCart } = this.context
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item.id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>

                                <div className="colors">
                                    <p>{item.colors.map((color, id) => (
                                        <button key={id} style={{ background: color }}></button>
                                    ))}</p>
                                </div>

                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item.id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
               
            </>
        )
    }
}

export default Details

