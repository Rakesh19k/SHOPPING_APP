import React, { Component } from 'react'
import "../css/Payment.css"
import Lock from "../svg/lock-solid.svg"
import { DataContext } from "../Context"

class Payment extends Component {

    static contextType = DataContext;

    render() {
        const { total } = this.context;
        return (
            <>
                <div className="body">
                    <div className="ani"></div>
                    <div>
                        <div className="payment">
                            <div className="payment-h">
                                <h3 className="panel-title">
                                    Payment Details
                        </h3>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />
                            Remember
                        </label>
                                </div>
                            </div>
                            <div className="ani1"></div>
                            <div className="ani3"></div>

                            <hr />
                            <form role="form">
                                <div className="form-group">
                                    <label className="cardNumber">CARD NUMBER</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                                            required autofocus />
                                        <span className="input-group-addon"><img src={Lock} width="15" /></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <label>EXPIRY DATE</label>
                                        <div className="ex-input">
                                            <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                            <input type="text" className="form-control" id="expityYear" placeholder="YY" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>CV CODE</label>
                                        <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="ani2"></div>

                        <div>
                            <ul className="nav">
                                <h4>Final Payment</h4>
                                <span className="badge pull-right">$ {total}</span>
                            </ul>
                            <div className="button"><h4>Pay</h4></div>

                        </div>
                        <div className="upi-payment">
                            <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Google-Pay-Logo-Icon-PNG-1024x1024.png" className="g-pay" style={{ width: 41, height: 40 }} />
                            <img src="https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe_white-1024x1024.png" className="phone-pe" style={{ width: 40 }} />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hgkLTZGugNZSY7SAs16RNuySYOP3T05JBg&usqp=CAU" style={{ width: 41, height: 39 }} />
                        </div>
                    </div>
                </div>

                {/* <div>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div > */}
            </>
        )
    }
}

export default Payment
