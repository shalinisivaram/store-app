"use client"
import { useEffect, useState } from "react"
import Image from "next/image";
import { Header } from "../components/header/Header";
import './cart.css';
import '../../app/globals.css';
import DeleteButton from "../assets/images/delete.png";
import PriceSummary from "../components/price/PriceSummary";
import Link from "next/link";
import MessageComponent from "../components/message/MessageComponent";

export default function Cart() {
    const [cartItems, setCartItems] = useState()
    useEffect(() => {
        const getCartItems = () => {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
        }

        getCartItems()
    }, [])

    function removeItem(productId) {
        const updatedCart = cartItems.filter(item => item.id !== productId)
        localStorage.setItem('cartItems', JSON.stringify(updatedCart))
        setCartItems(updatedCart)
    }

    function updateQuantity(productId, type) {
        console.log('call')
        const updated = cartItems.map(item => item.id == productId ?
            { ...item, quantity: type == 'inc' ? item.quantity += 1 : item.quantity -= 1 } :
            item
        )
        setCartItems(updated)
    }

    return (
        <>
            <Header />
            {cartItems && cartItems.length > 0 &&
                <h2 className="page-heading">Cart Items</h2>
            }
            <div className="page-container">
                {cartItems && cartItems.length > 0 &&
                    <div className="cart-container">
                        {cartItems.map((item) => {
                            return (
                                <div key={item.id} className="cart-item-container">
                                    <Image src={item.image} width={100} height={100} alt="product-img" />
                                    <div className="cart-detail">
                                        <div>
                                            <p className="product-title">{item.title}</p>
                                            <div className="cart-detail">
                                                <div>
                                                    <Image src={`/images/ratings/rating-${Math.round(item.rating?.rate * 2) * 5}.png`} width={100} height={30} alt="rate" />
                                                    <span>{`(${item.rating.count})`}</span>
                                                </div>
                                                <div className="qty-box">
                                                    <h5 className="qty-heading">Qty</h5>
                                                    <button onClick={() => updateQuantity(item.id, 'inc')} className="qty-btn">+</button>
                                                    <span className="item-qty">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 'dec')} className="qty-btn" disabled={item.quantity == 1}>-</button>
                                                </div>
                                            </div>
                                            <p className="product-price">₹{item.price}</p>
                                        </div>

                                    </div>
                                    <Image className="delete-btn" src={DeleteButton} alt="dlt-btn" width={50} height={50} onClick={() => removeItem(item.id)} />
                                </div>
                            )
                        })}
                        <Link href="/checkout" className="btn-container">
                            <button type="submit" className="cart-btn">Continue to Checkout</button>
                        </Link>
                    </div>
                }
                {cartItems && cartItems.length > 0 &&
                    <PriceSummary cartItems={cartItems} />
                }
            </div>
            {!cartItems || cartItems.length == 0 && (
                <MessageComponent type={'cart'} message={'Your Cart is Empty'} btnText={'Go To Products'}/>
            )}
        </>
    )
}