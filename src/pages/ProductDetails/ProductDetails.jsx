import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div className="max-w-[1504px] px-4 mx-auto">
            <img className="mx-auto" src={product.image} alt="" />
        </div>
    );
};

export default ProductDetails;