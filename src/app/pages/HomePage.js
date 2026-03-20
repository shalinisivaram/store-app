import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import axios from "axios";

export function HomePage() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProductData = async() =>{
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data)
        }
        fetchProductData()
    },[])
    return (
        <>
            <Header />
            <ProductGrid products={products} />
        </>

    )
}