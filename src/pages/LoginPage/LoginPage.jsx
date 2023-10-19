import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
const LoginPage = () => {
  const [isShow, setShow] = useState(false);
  const { signInUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((res) => {
        toast.success("User logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleSocialLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("User Logged in Successfully!");
        navigate("/");
      })
      .catch((error) => toast.error("Popup closed"));
  };
  return (
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
              onClick={ handleSocialLogin}
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
          <form onSubmit={handleLogin}>
            <div className="form-control pt-0">
              <label className="label pt-0">
                <span className="label-text text-[#c0bfbf] font-medium  ">
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
                    to={"/register"}
                    className="text-primary-bg  hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
            <div className="form-control  mt-6">
              <button
                type="submit"
                className="py-2 rounded-lg duration-300 font-semibold w-full capitalize  md:text-lg   bg-white text-black "
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
