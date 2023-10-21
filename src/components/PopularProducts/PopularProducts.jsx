
const PopularProducts = ({product}) => {
    const { name, price, image, brand } = product;
    return (
        <div>
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
            </div>
          </div>
        </div>
    );
};

export default PopularProducts;