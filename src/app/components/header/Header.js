import logo from '../../assets/images/shopora-logo.png';
import wishList from '../../assets/images/wishList.png';
import cart from '../../assets/images/cart.jpeg';
import Image from 'next/image';
import './Header.css';



export function Header(){
    return(
        <div className='head-container'>
        <Image src={logo} alt="logo" width="150" height="150" className='logo'/>
        <Image src={wishList} alt="wishlist" width="50" height="50"/>
        <Image src={cart} alt="cart" width="50" height="50"/>
        </div>
    )
}