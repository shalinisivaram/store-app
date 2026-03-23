import { ProductDetail } from "./productDetail";

export default async function getProductId({ params }) {
    const resolvedParam = await params;
    const id = resolvedParam.id;
    return (
        <>
            <ProductDetail productId={id} />
        </>
    )
}