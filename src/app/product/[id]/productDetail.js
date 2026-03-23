"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import './productDetail.css'
import { Header } from "@/app/components/header/Header";
import Link from "next/link";
import WishlistIcon from '../../assets/images/wishlist-black.png';
import heartIcon from '../../assets/images/heart.png';

export function ProductDetail({ productId }) {
    const [product, setProduct] = useState([])
    const [productExist, setProductExist] = useState(false)
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem('wishList')) || [])

    useEffect(() => {

        const getProductDetails = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(response.data)
        }
        const isExistInCart = () => {
            const existing = JSON.parse(localStorage.getItem('cartItems'))
            if (existing) {
                const isExist = existing.some(item => item.id == productId)
                setProductExist(isExist)
            }

        }

        getProductDetails()
        isExistInCart()
    }, [productId])

    function addToCart() {
        const existing = JSON.parse(localStorage.getItem('cartItems')) || [];
        let updatedProduct = { ...product, quantity: 1 }
        existing.push(updatedProduct)
        localStorage.setItem('cartItems', JSON.stringify(existing))
        setProductExist(true)
    }

    function addItemToWishList(product) {
        const existing = JSON.parse(localStorage.getItem('wishList')) || [];
        existing.push(product)
        localStorage.setItem('wishList', JSON.stringify(existing));
        setWishList(existing)
    }

    function removeItemFromWishList(productId) {
        const updatedWishList = wishList.filter(item => item.id !== productId)
        localStorage.setItem('wishList', JSON.stringify(updatedWishList))
        setWishList(updatedWishList)
    }

    function isInWishlist(productId) {
        return wishList.some(item => item.id == productId)
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
                            <span className='product-rate'>{product.rating?.rate}</span>
                            <Image src={`/images/ratings/rating-${Math.round(product.rating?.rate * 2) * 5}.png`} width={100} height={30} alt="rate" />
                            <span className="count">{`(${product.rating?.count})`}</span>
                                <p className="product-price">₹.{product.price}</p>

                        </div>
                        <div className="btn-container">
                            {isInWishlist(product.id) ? (
                                    <Image src={heartIcon} width={40} height={40} alt='wishlist' onClick={() => removeItemFromWishList(product.id)} />
                                ) : (
                                    <Image src={WishlistIcon} width={40} height={40} alt='wishlist' onClick={() => addItemToWishList(product)} />
                                )}
                            <Link href="/">
                                <button type="cancel" className="cancel-btn">Go Back</button>
                            </Link>
                            {productExist ?
                                (
                                    <Link href="/cart">
                                        <button type="submit" className="cart-btn">Go To Cart</button> :
                                    </Link>
                                ) : (
                                    <button type="submit" className="cart-btn" onClick={addToCart}>Add To Cart</button>

                                )

                            }
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}