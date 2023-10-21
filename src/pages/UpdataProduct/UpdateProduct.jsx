import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const [product, setProduct] = useState(loadedProduct);
  const {
    _id,
    name,
    category,
    price,
    rating,
    short_description,
    image,
    brand: brand_name,
  } = product;

  const [brand, setBrand] = useState(`${brand_name}`);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/update/product/${_id}`);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const category = form.get("category");
    const priceValue = form.get("price");
    const price = parseInt(priceValue);
    const ratingValue = form.get("ratings");
    const rating = parseFloat(ratingValue);
    const short_description = form.get("description");
    const image = form.get("photo");

    if (name === "") {
      return toast.error("Please provide Product name");
    }
    if (brand === "") {
      return toast.error("Please select Brand name");
    }
    if (category === "") {
      return toast.error("Please provide Product category");
    }
    if (price === "") {
      return toast.error("Please provide Product price");
    }
    if (rating === "") {
      return toast.error("Please provide Product rating");
    }
    if (short_description === "") {
      return toast.error("Please provide Product short description");
    }
    if (image === "") {
      return toast.error("Please provide Product image URL");
    }

    const updatedProduct = {
      name,
      category,
      price,
      rating,
      short_description,
      image,
      brand,
    };
    console.log(updatedProduct);
    // send data to the server
    fetch(`https://digital-nexa-server.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Product Updated Successfully')
          setProduct(updatedProduct);
          handleNavigate()
        }
      });
  };
  return (
    <div className="max-w-[1304px] px-4    mx-auto">
      <div className=" shadow-xl   p-3  md:p-24">
        <h2 className="text-3xl  text-center pb-4 font-extrabold">
          Update product
        </h2>
        <div className=" bg-base-100 border-[#6867671f] border p-4 md:flex my-4 md:w-max px-10 mx-auto rounded-md  shadow-md">
          <figure className="border  rounded-xl">
            <img
              src={image}
              className="mx-auto rounded-xl object-contain w-[100px] md:w-[300px]"
            />
          </figure>

          <div className="flex justify-center items-center w-full   ">
            <div className="space-y-2">
              <h2 className="text-base font-semibold">
                Brand: <span className="font-medium">{brand_name}</span>{" "}
              </h2>
              <h2 className="text-base font-semibold">
                Product: <span className="font-medium">{name}</span>{" "}
              </h2>
              <p className="text-base font-semibold">
                Rating: <span className="font-medium">{rating}</span>{" "}
              </p>
              <p className="text-base font-semibold">
                Category: <span className="font-medium">{category}</span>{" "}
              </p>
              <p className="text-base font-semibold">
                Price: <span className="font-medium">${price}</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleUpdateProduct}>
          <div className="md:flex mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Product Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product name"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Sub category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Product category"
                  className="input   input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-lg font-semibold">Brand</span>
              </label>
              <label className="input-group">
                <select
                  onChange={handleBrandChange}
                  name="brand"
                  className="input input-bordered w-full select "
                >
                  <option disabled>Select Brand Category</option>
                  <option>Apple</option>
                  <option>Samsung</option>
                  <option>Sony</option>
                  <option>Lg</option>
                  <option>Microsoft</option>
                  <option>Xiaomi</option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  min={0}
                  defaultValue={price}
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-lg font-semibold ">
                  Ratings{" "}
                </span>
              </label>
              <label className="input-group">
                <input
                  min={0}
                  max={5}
                  type="number"
                  name="ratings"
                  step="0.1"
                  defaultValue={rating}
                  placeholder="Product ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Short Description{" "}
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={short_description}
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={image}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block border-none bg-[#1b1b1b] text-white hover:bg-[#222222]"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
