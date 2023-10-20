import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    name,
    category,
    price,
    rating,
    short_description,
    image,
    brand,
  } = product;
  console.log(product);
  return (
    <div className="max-w-[1504px] px-4 mx-auto">
      <div className="flex gap-10 border shadow-xl p-10 rounded-lg ">
        <div className="w-1/3 border p-10">
          <img className="w-[500px] min-h-[200px] object-contain mx-auto" src={image} />
        </div>
        <div className=" w-2/3  p-10">
            <h2 className="text-4xl font-bold">{brand}</h2>
            <div className="flex items-center my-4 justify-between">
            <h3 className="text-2xl font-medium">{name}</h3>
            <p className="text-2xl font-medium">Price: ${price}</p>
            </div>
            <div className="rating rating-md">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

        <div className="font-medium">
            <h4 className="text-xl mb-2 mt-5 "><span className="font-bold">Category:</span> {category}</h4>
            <h4 className="text-xl my-2 "><span className="font-bold">Price:</span> {price}</h4>
            <h4 className="text-xl my-2 "><span className="font-bold">Rating:</span> {rating}</h4>
            <p className="text-xl mt-6">{short_description}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
