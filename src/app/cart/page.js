import { useEffect, useState } from "react"

export function Cart() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const getCartItems = () => {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        }

        getCartItems()
    }, [])

    return (
        <>
            {cartItems.map((item)=>{
                return(
                    <div key={item.id} className="cart-item-container">

                    </div>
                )
            })}
        </>
    )
}