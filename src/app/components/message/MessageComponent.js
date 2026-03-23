import Image from "next/image";
import Link from "next/link";
import CheckIcon from '../../assets/images/check.png';
import EmptyCart from '../../assets/images/empty-cart.png';
import sadFace from '../../assets/images/sad-face.png';
import './MessageComponent.css';

export default function MessageComponent({ type, message, btnText }) {
    return (
        <div className="success-msg">
            <Image src={type == "success" ? CheckIcon : type == 'cart' ? EmptyCart : sadFace} width={150} height={150} alt="check-mark" />
            <p>{message}</p>
            <Link href="/">
                <button type="submit" className="cart-btn shop-btn">{btnText}</button>
            </Link>
        </div>
    )
}