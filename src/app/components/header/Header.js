import logo from '../../assets/images/shopora-logo.png';
import wishList from '../../assets/images/wishList.png';
import cart from '../../assets/images/cart.jpeg';
import Image from 'next/image';
import './Header.css';
import Link from 'next/link';

export function Header() {
    return (
        <div className='head-container'>
            <Link href="/">
                <Image src={logo} alt="logo" width="150" height="150" className='logo' />
            </Link>
            <div className='icon-container'>
                <Link href="/wishlist">
                    <Image src={wishList} alt="wishlist" width="50" height="50" />
                </Link>
                <Link href="/cart">
                    <Image src={cart} alt="cart" width="50" height="50" className='cart-icon' />
                </Link>
            </div>

        </div>
    )
}