import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductDetails = () => {
  const product = useLoaderData();
  const { name, category, price, rating, short_description, image, brand } =
    product;
  return (
    <div className="max-w-[1504px] pt-14 px-4 mx-auto">
      <div className="lg:flex gap-10 border  shadow-xl p-5 md:p-10 rounded-lg ">
        <div className=" w-full lg:w-1/3 border flex items-center justify-center rounded-xl p-5 md:p-10">
          <img
            className="w-full md:w-[350px] lg:w-[500px] min-h-[200px] object-contain mx-auto"
            src={image}
          />
        </div>
        <div className="  w-full lg:w-2/3  p-5 md:p-10">
          <h2 className="text-4xl font-bold">{brand}</h2>
          <div className="md:flex items-center my-4 justify-between">
            <h3 className="text-2xl font-medium">{name}</h3>
            <p className="text-2xl hidden md:flex font-medium">
              Price: ${price}
            </p>
          </div>
          <div className="text-3xl md:text-4xl text-orange-400">
            <Rating
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar/>}
              initialRating={rating}
              readonly
            />
          </div>

          <div className="font-medium">
            <h4 className="text-xl mb-2 mt-5 ">
              <span className="font-bold">Category:</span> {category}
            </h4>
            <h4 className="text-xl my-2 ">
              <span className="font-bold">Price:</span> ${price}
            </h4>
            <h4 className="text-xl my-2 ">
              <span className="font-bold">Rating:</span> {rating}
            </h4>
            <p className="text-xl mt-6">{short_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
