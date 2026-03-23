"use client"
import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { ProductGrid } from "../components/productGrid/ProductGrid";
import MessageComponent from "../components/message/MessageComponent";

export default function WishList() {
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        const getWishlistItems = async () => {
            setWishList(JSON.parse(localStorage.getItem('wishList')) || [])
        }
        getWishlistItems()
    }, [])

    return (
        <>
            <Header />
            <ProductGrid products={wishList} />
            {!wishList || wishList.length == 0 && (
                <MessageComponent type={'wishList'} message={'Your Wishlist is Empty'} btnText={'Go To Products'} />

            )}
        </>
    )
}