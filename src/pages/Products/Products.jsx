import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
    const [brandCat,setBrandCat]=useState([])
  const products = useLoaderData();
  useEffect(()=>{
    fetch("http://localhost:5000/brand")
    .then(res=>res.json())
    .then(data=>setBrandCat(data))
},[])
  console.log(products);
  return (
    <div>
      <div className="pb-20">
        <Banner />
      </div>
      <section className=" max-w-[1504px] px-4   mx-auto my-20">
        <div className="flex gap-5 -pb-3">

        {brandCat?.map((product, idx) => (
          <div key={idx}><button className="text-black   focus:border-b-2 pb-[14px] focus:text-red-600 focus:border-rose-600 font-semibold">{product?.name}</button></div>
        ))}
        </div>
        <hr className="pb-10 " />
       <div className="grid md:grid-cols-5  gap-4">
       {products?.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
       </div>
      </section>
    </div>
  );
};

export default Products;
