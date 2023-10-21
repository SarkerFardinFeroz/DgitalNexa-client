import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddProduct = () => {
  const[brand,setBrand] = useState('')
  const handleBrandChange=e=>{
    setBrand(e.target.value)
  }
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const category = form.get("category");
    const priceValue = form.get("price");
    const price = parseInt(priceValue)
    const ratingValue = form.get("ratings");
    const rating = parseInt(ratingValue)
    const short_description = form.get("description");
    const image = form.get("photo");

    if(name === ''){
      return  toast.error("Please provide Product name");
    }
    if(brand === ''){
      return  toast.error("Please select Brand name");
    }
    if(category === ''){
      return  toast.error("Please provide Product category");
    }
    if(price === ''){
      return  toast.error("Please provide Product price");
    }
    if(rating === ''){
      return  toast.error("Please provide Product rating");
    }
    if(short_description === ''){
      return  toast.error("Please provide Product short description");
    }
    if(image === ''){
      return  toast.error("Please provide Product image URL");
    }



    const newProduct = {
      name,
      category,
      price,
      rating,
      short_description,
      image,
      brand
    };
    console.log(newProduct);
      // send data to the server
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'Product Added Successfully',
                  icon: 'success',
                  confirmButtonText: 'ok'
                })
               
                
          }
        });
  };
  return (
    <div className="max-w-[1304px] px-4   mx-auto">
      <div className=" shadow-xl  p-3 rounded-xl md:p-24">
        <h2 className="text-3xl  text-center pb-4 font-extrabold">
          Add a product
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* form name */}
          <div className="md:flex mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Sub category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Product category"
                  className="input   input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <label className="input-group">
                <select onChange={handleBrandChange} name="brand" className="input input-bordered w-full select ">
                  <option disabled selected>
                    Select Brand Category
                  </option>
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
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  min={0}
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Ratings </span>
              </label>
              <label className="input-group">
                <input
                min={0}
                max={5}
                  type="number"
                  name="ratings"
                  placeholder="Product ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form description  row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Short Description </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block border-none bg-[#1b1b1b] text-white hover:bg-[#222222]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
