import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CartCards from "../../components/CartCards/CartCards";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const cart = useLoaderData();
  const [productsArr, setProductsArr] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const filterCart = cart.filter((product) => {
      return product.user === user.uid;
    });
    if (filterCart.length > 0) {
      setProductsArr(filterCart);
      const totalCount = productsArr?.reduce(
        (accu, prod) => accu + parseInt(prod.product.price),
        0
      );
      setTotal(totalCount);
    }
  }, []);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://digital-nexa-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");
              const remainingProduct = productsArr.filter(
                (cart) => cart._id !== _id
              );
              console.log(remainingProduct);
              setProductsArr(remainingProduct);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-[1504px] pb-60   px-4   mx-auto ">
      <div className="flex justify-center gap-6 pt-9 ">
        {productsArr.length > 0 ? (
          <div className="w-full ">
            <div className="text-center py-2 rounded-lg bg-[#cac9c97e]">
              <p className="uppercase text-black font-semibold">Product</p>
            </div>
            {productsArr.map((products, idx) => (
              <CartCards
                key={idx}
                products={products}
                handleDelete={handleDelete}
              />
            ))}
            <div className="text-end pt-2">
              <h3 className="text-2xl font-bold">Total: ${total}</h3>
            </div>
          </div>
        ) : (
          <div>
            <img
              className="w-[500px] mx-auto"
              src="https://i.ibb.co/sy5sZF9/shoping-bag.jpg"
            />
            <h2 className="text-center text-2xl font-semibold">
              Your Cart is empty
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
