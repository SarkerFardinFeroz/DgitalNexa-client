import PropTypes from 'prop-types';

const Product = product => {
    const {
        name,
        category,
        price,
        rating,
        short_description,
        image,
        brand_name,
      } = product.product;
    return (
        <div >
             <div className="card  card-compact w-72 bg-white border  shadow-xl">
          <figure className='p-4  rounded-xl'>
            <img className='w-full border h-[250px] object-contain rounded-xl' src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">{brand_name}</h2>
           <div className='flex justify-between items-center overflow-hidden'>
           <p className='font-medium text-base'>{name}</p>
            <p className='font-medium flex-1 text-lg'>${price}</p>
           </div>
            <div className=" flex gap-4 justify-start">
             <button className='border   text-white bg-black w-full px-4 py-[6px] rounded-lg'>Details</button>
             <button className='border border-black text-black w-full px-4 py-[6px]  rounded-lg'>Update</button>
            </div>
          </div>
        </div>
        </div>
    );
};

Product.propTypes = {
    product:PropTypes.object
};

export default Product;