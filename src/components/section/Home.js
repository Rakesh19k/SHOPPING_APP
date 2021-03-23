import React from 'react'
import "../css/Home.css"
import Arrow from "../svg/right-arrow.svg"
import Shoe from "../svg/shoe.png"
import Shoe1 from "../svg/shoe1.png"

function Home() {
    return (
        <div className="Body">
            <div className="boll"></div>
            <div className="boll1"></div>
            <div className="boll2"></div>
            <div className="boll3"></div>
            <div className="boll4"></div>
            <div className="boll5"></div>
            <div className="text">
                <h1>Are you ready to <br /><span>Lead the way</span></h1>
                <p>Mauris porta lectus nulla, non dignissim dolor<br />
                sollicitudin et. Sed mi tortor, aliquam eget<br />
                congue a, faucibus sed est.</p>
                <span className="btn1">Buy Now<img src={Arrow} alt="" width="13" /></span>
            </div>
            <div className="Shoe-b">
                <img src={Shoe} width="500" />
            </div>
            <div className="shoe-c">
                <span>Nike Max 2</span><br />
                <span>$ 70  +</span>
                <img className="sh1" src={Shoe} width="120" />
                <img className="sh2" src={Shoe1} width="100" />
            </div>
        </div>
    )
}

export default Home
