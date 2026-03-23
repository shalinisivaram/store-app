import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { ProductGrid } from "../productGrid/ProductGrid";
import axios from "axios";

export function HomePage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data)
        }
        fetchProductData()
    }, [])
    return (
        <>
            <Header />
            <ProductGrid products={products}/>
        </>

    )
}