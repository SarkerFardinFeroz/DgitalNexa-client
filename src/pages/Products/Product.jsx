import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = (product) => {
  const {
    _id,
    name,
    category,
    price,
    rating,
    short_description,
    image,
    brand_name,
  } = product.product;
  console.log(_id);
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
      <div className="relative mx-4 border mt-4 overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
        <img src={image} className="object-contain w-full h-[250px]" />
      </div>
      
      <div className="p-6 flex-grow">
     
        <p className="block font-sans text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
          {brand_name}
        </p>
        
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${price}
          </p>
        </div>
        <div className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          <div className="rating rating-sm">
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
        </div>
      </div>
      <div className="p-6 pt-0">
       <div className=" flex gap-4 justify-start">
 <Link to={`/products/details/${_id}`} className='w-full'> <button className='border   text-white bg-black w-full px-4 py-[6px] rounded-lg'>Details</button></Link>
  <Link className='w-full'><button className='border border-black text-black w-full px-4 py-[6px]  rounded-lg'>Update</button></Link>
 </div>
      </div>
    </div>
  );
};


Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
