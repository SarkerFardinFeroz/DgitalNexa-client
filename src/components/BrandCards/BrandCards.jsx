import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BrandCards = ({ card }) => {
  
  const { brand_image ,name } = card;
  return (
    <Link  to={`/products/${name}`}>
      <div className="card rounded-none px-6  ">
      <div className="p-5">
        <img className="object-contain mx-auto w-[100px] md:w-[200px] md:h-[200px]" src={brand_image} alt="" />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
      </div>
      </div>
    </Link>
  );
};
BrandCards.propTypes = {
  card: PropTypes.object,
};
export default BrandCards;
