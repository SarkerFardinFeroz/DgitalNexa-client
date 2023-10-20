import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BrandCards = ({ card }) => {
  
  const { brand_image } = card;
  return (
    <Link to={'/products'}>
      <div className="card border bg-white  shadow-md">
      <div className="p-5">
        <img className="object-contain mx-auto w-[200px] h-[200px]" src={brand_image} alt="" />
      </div>
        
      </div>
    </Link>
  );
};
BrandCards.propTypes = {
  card: PropTypes.object,
};
export default BrandCards;
