import './PriceSummary.css'
export default function PriceSummary({ cartItems }) {
    let itemPrice = 0;
    let totalPrice = 0;
    let PlatformFee = 0;
    let cartCount = 0;
    if (cartItems) {
        cartCount = cartItems.length
        PlatformFee = 7
        cartItems.forEach(item => {
            itemPrice += item.price;
            itemPrice = itemPrice * item.quantity
        });

        totalPrice = itemPrice + PlatformFee
        localStorage.setItem('totalPrice', totalPrice)
    }

    return (
        <div className="price-container">
            <h4>Price Details</h4>
            <div className='dashed-line'></div>
            <p>Price({cartCount} items): <span>₹{itemPrice}</span></p>
            <p>Platform Fee: <span>₹{PlatformFee}</span></p>
            <div className='dashed-line'></div>
            <p className='total-amt'>Total Amount: <span>₹{totalPrice}</span></p>
        </div>
    )
}