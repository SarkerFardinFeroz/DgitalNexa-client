import PropTypes from "prop-types";
import { FiTrash } from "react-icons/fi";

const CartCards = ({ products, handleDelete }) => {
  const dataId = products._id;
  const productData = products.product;
  const {  name, category, price, image, brand } = productData;

  return (
    <div className=" text-center md:text-start  md:flex justify-between  items-center  border-b md:h-[206px] space-y-4 md:space-y-0  py-4 ">
      <div className="bg-white  border">
        <img className="w-[200px] mx-auto h-[140px] object-contain" src={image} />
      </div>
      <div className="flex-grow space-y-2 md:space-y-0 md:ml-[152px]">
        <h2 className="font-bold">{brand}</h2>
        <p className="text-sm font-medium opacity-50">{category}</p>
        <h2 className="font-medium">{name}</h2>
      </div>
      <div className="">
        <h2 className="text-lg font-bold">${price}</h2>
      </div>
      <div className="md:ml-5">
        <button
          onClick={() => handleDelete(dataId)}
          className=" btn font-bold text-2xl"
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

CartCards.propTypes = {
  products: PropTypes.object,
};

export default CartCards;
