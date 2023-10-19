import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [isShow, setShow] = useState(false);

  const { createUser, googleLogin, handleUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least one capital letter.");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/.test(password)) {
      toast.error("Your password should have at least one special character.");
      return;
    }

    createUser(email, password)
      .then((res) => {
        handleUpdateProfile(name, photo)
          .then(() => {
            const uid = res.user?.uid;
            const user = { name, email, photo, uid };
            fetch("http://localhost:5000/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  toast.success("User created Successfully!");
                }
              });
            if (res.user) {
              navigate("/");
            }
          })
          .catch(() => {});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("User Logged in Successfully!");
        navigate("/");
      })
      .catch((error) => toast.error("Popup closed"));
  };
  return (
    <div>
      <div className="min-h-[90vh] md:min-h-[80vh]  flex flex-col justify-center items-center   px-4 mx-auto">
        <div className="bg-[#a3a3a323] p-5 md:p-6  rounded-xl">
          <div>
            <h2 className="text-white text-2xl font-semibold">
              Login to your account
            </h2>
            <p className="text-[#c0bfbf]  pt-1 text-sm">
              Enter your email below to login your account
            </p>
            <div className="flex flex-col md:flex-row  gap-3 py-3">
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="flex  items-center   px-3 w-[150px] py-[6px] mx-auto md:px-5 md:py-2 rounded-md bg-black border border-[#f8f8f838] gap-3"
              >
                <FcGoogle className="text-2xl" />
                Google
              </button>
            </div>
            <div className="text-xs flex text-[#c0bfbf] font-medium justify-center items-center py-1 md:py-3 gap-1 text-center">
              <div className="bg-[#c0bfbf] w-[60px] h-[1px]"></div>
              <p className="uppercase">or continue with</p>
              <div className="bg-[#c0bfbf] w-[60px] h-[1px]"></div>
            </div>
            <form onSubmit={handleRegister}>
              <div className="form-control pt-0">
                <label className="label pt-0">
                  <span className="label-text text-[#c0bfbf] font-medium">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name here"
                  name="name"
                  className="input bg-transparent md:h-[55px] input-bordered"
                  required
                />
              </div>
              <div className="form-control pt-2">
                <label className="label pt-0">
                  <span className="label-text text-[#c0bfbf] font-medium">
                    Profile url
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Profile url here"
                  name="photo"
                  className="input bg-transparent md:h-[55px] input-bordered"
                  required
                />
              </div>
              <div className="form-control pt-2">
                <label className="label pt-0">
                  <span className="label-text text-[#c0bfbf] font-medium">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder=" Email address here"
                  name="email"
                  className="input bg-transparent md:h-[55px] input-bordered"
                  required
                />
              </div>
              <div className=" relative form-control">
                <label className="label">
                  <span className="label-text text-[#c0bfbf] font-medium ">
                    Password
                  </span>
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  placeholder="password here"
                  name="password"
                  className=" input  mb-1 bg-transparent md:h-[55px] input-bordered"
                  required
                />
                <span
                  onClick={() => setShow(!isShow)}
                  className="text-[#c0bfbf] absolute cursor-pointer top-[41px] md:top-[45px] right-0 z-30 px-3 py-2 rounded-r-lg text-2xl capitalize "
                >
                  {isShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
                <div className=" font-medium text-[#c0bfbf] text-sm  mt-3 items-center">
                  <p>
                    Dont’t Have An Account ?{" "}
                    <Link
                      to={"/login"}
                      className="text-primary-bg  hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
              <div className="form-control  mt-6">
                <button
                  type="submit"
                  className="py-2 rounded-lg duration-300 font-semibold w-full capitalize  md:text-lg   hover:scale-105 hover:shadow-md hover:shadow-[#1cdb033d] bg-white text-black "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
