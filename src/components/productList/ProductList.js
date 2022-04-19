import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire. It is hiru</h1>
            <p className="pl-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
        </div>
    )
}

export default ProductList