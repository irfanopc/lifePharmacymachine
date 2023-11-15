import "./Product.css"

import { useEffect, useState } from "react"

import Footer from "../footer/Footer"
import Header from "../header/Header"
import Rating from "./rating.png"
import RelatedItems from "../relatedItems/RelatedItems"
import leftImg from "./leftImage.png"
import mainImg from "./mainImage.png"

const Product = () => {
    const [count, setCount] = useState(0);
    const [pressed, setPressed] = useState(null);
    const [productData, setProductData] = useState()
    console.log(productData, "ppp");
    const handleButtonClick = (buttonId) => {
        setPressed(buttonId);
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((response) => {
                return response.json();
            }).then((datas) => {
                setProductData(datas);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="product-container">
            <Header />
            <div className="prodct">
                <div className="image">
                    <img src={leftImg} alt="image" />
                </div>
                <div className="image">
                    <img src={mainImg} alt="image" />
                </div>
                <div className="discription">
                    <div className="header">
                        <h3>{productData ? productData.title : "Havic HV G-92 Gamepad"}</h3>
                    </div>
                    <div className="rating">
                        <img src={Rating} alt="" />
                    </div>
                    <div className="price">${productData ? productData.price : ""}</div>
                    <div className="explanation">
                        <p>
                            {productData ? productData.description : ""}</p>
                    </div>
                    <div className="color ">
                        <span>Color</span>
                        <input type="radio" />
                    </div>
                    <div className="size ">Size
                        <button className="size-btn" onClick={() => handleButtonClick(1)} style={{ background: pressed === 1 ? "pink" : "white" }}>XS</button>
                        <button className="size-btn" onClick={() => handleButtonClick(2)} style={{ background: pressed === 2 ? "pink" : "white" }}>S</button>
                        <button className="size-btn" onClick={() => handleButtonClick(3)} style={{ background: pressed === 3 ? "pink" : "white" }}>M</button>
                        <button className="size-btn" onClick={() => handleButtonClick(4)} style={{ background: pressed === 4 ? "pink" : "white" }}>L</button>
                    </div>
                    <div className="buy">
                        <button onClick={() => { setCount(count + 1) }}>+</button>
                        {count}
                        <button onClick={() => { setCount(count - 1) }}>-</button>
                        <div className="buynow">
                            <button>buy now</button>
                        </div>
                    </div>
                    <div className="policy">
                        <div className="freedel">free delivery</div>
                        <div className="freedel">return delivery</div>
                    </div>
                </div>

            </div>
            <RelatedItems/>
            <Footer/>
        </div>
    )
}
export default Product;