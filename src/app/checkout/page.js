"use client"
import { useState, useEffect } from "react";
import './checkout.css';
import { Header } from "../components/header/Header";
import PriceSummary from "../components/price/PriceSummary";
import Link from "next/link";
import MessageComponent from "../components/message/MessageComponent";

export default function Checkout() {
    const [cartItems, setCartItems] = useState([])
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: ""
    });

    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        const getCartItems = () => {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        }

        getCartItems()
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("order placed", form)
        setShowMessage(true)
        localStorage.removeItem('cartItems')

    }

    return (
        <>
            <Header />
            {!showMessage &&
                <div className="page-container">
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text"
                                    name="name"
                                    className="form-field"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                    required />
                            </div>

                            <div>
                                <input type="email"
                                    name="email"
                                    className="form-field"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                    required />
                            </div>

                            <div>
                                <input type="text"
                                    name="address"
                                    className="form-field"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Enter Address"
                                    required />
                            </div>
                            <div className="btn-container">
                                <Link href="/cart">
                                    <button type="cancel" className="cancel-btn">Go To Cart</button>
                                </Link>
                                <button type="submit" className="cart-btn">Place Order</button>
                            </div>
                        </form>
                    </div>
                    <PriceSummary cartItems={cartItems} />
                </div>}
            {showMessage && (
                <MessageComponent type={'success'} message={'Order Placed Successfully'} btnText={'Shop More'}/>
            )}
        </>
    )
}