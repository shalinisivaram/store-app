"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import './productDetail.css'
import { Header } from "@/app/components/header/Header";
import Link from "next/link";

export function ProductDetail({ productId }) {
    const [product, setProduct] = useState([])
    const [productExist, setProductExist] = useState([])

    useEffect(() => {
        const getProductDetails = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(response.data)
        }
        const isExistInCart = () => {
            const existing = JSON.parse(localStorage.getItem('cartItems'))
            const isExist = existing.filter(item => item.id == productId)
            if(isExist.length){
                setProductExist(true)
            }
        }

        getProductDetails()
        isExistInCart()
    }, [productId])

    function addToCart() {
        const existing = JSON.parse(localStorage.getItem('cartItems')) || [];
        existing.push(product)
        localStorage.setItem('cartItems', JSON.stringify(existing))
    }

    return (
        <>
            <Header />
            {product && (
                <div className="product-detail-container">
                    <div>
                        {product.image &&
                            <Image src={product.image} alt="product-image" width={300} height={300} />
                        }
                    </div>
                    <div className="product-detail-text">
                        <div>
                            <h1>{product.title}</h1>
                            <p className="product-description">{product.description}</p>
                        </div>
                        <div>
                            <Image src={`/images/ratings/rating-${Math.round(product.rating?.rate * 2) * 5}.png`} width={100} height={30} alt="rate" />
                            <span className="count">{`(${product.rating?.count})`}</span>
                            <p className="product-price">${product.price}</p>
                        </div>
                        <div className="btn-container">
                            <Link href="/">
                                <button type="cancel" className="cancel-btn">Go Back</button>
                            </Link>
                            <button type="submit" className="cart-btn" onClick={addToCart}>{productExist ? 'Go to Cart' : 'Add to Cart'}</button>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}