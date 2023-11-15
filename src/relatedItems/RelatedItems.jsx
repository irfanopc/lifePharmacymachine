import "./RelatedItems.css";

import { useEffect, useState } from "react";

const RelatedItems = () => {
    const [productData, setProductData] = useState()
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
        <div className="related-item">
            <h1>relatedItems</h1>
            <img width="100px" src={productData?.image} alt="image" />
        </div>
    )
}

export default RelatedItems;