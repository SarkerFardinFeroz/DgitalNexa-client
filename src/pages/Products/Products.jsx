import { useLoaderData, useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  const location = useLocation();
  const url = location.pathname;
  const parts = url.split("/");
  const result = parts[2];
  console.log(products);
  return (
    <div>
      <div className="pb-4 max-w-[1504px] px-4   mx-auto">
        <Banner />
      </div>
      <section className=" max-w-[1504px] px-4   mx-auto my-20">
        <h2 className="text-4xl text-center mb-10 font-bold">
          {result ? `${result} Product` : "Products"}
        </h2>

        {products.length > 0 ? (
          <div className="grid md:grid-cols-3 xl:grid-cols-5  gap-4">
            {products?.map((product, idx) => (
              <Product key={idx} product={product} />
            ))}
          </div>
        ) : (
          <div>
            <img
              className="w-[500px] mx-auto"
              src="https://i.ibb.co/sy5sZF9/shoping-bag.jpg"
            />
            <h2 className="text-center text-2xl font-semibold">
              No Products Available
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
