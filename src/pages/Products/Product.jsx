import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Product = (product) => {
  const {
    _id,
    name,
    price,
    rating,
    image,
    brand,
  } = product.product;

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
      <div className="relative mx-4 border mt-4 overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
        <img
          src={image}
          className="object-contain w-full h-[150px] md:h-[250px]"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow ">
        <p className="block  text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
          {brand}
        </p>

        <div className="flex flex-grow   items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${price}
          </p>
        </div>
        <div className="block text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          <div className="text-2xl md:text-3xl text-orange-400">
            <Rating
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
              initialRating={rating}
              readonly
            />
          </div>
        </div>
      </div>
      <div className="p-6  pt-0">
        <div className=" flex gap-4 flex-grow justify-start">
          <Link to={`/products/details/${_id}`} className="w-full">
            {" "}
            <button className="border text-white bg-black w-full px-4 py-[6px] rounded-lg">
              Details
            </button>
          </Link>
          <Link to={`/update/product/${_id}`} className="w-full">
            <button className="border border-black text-black w-full px-4 py-[6px]  rounded-lg">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
