import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const [theme,setTheme]=useState(localStorage.getItem())
  const [open, setOpen] = useState(false);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>My cart</NavLink>
      </li>
    </>
  );
  return (
    <header className=" bg-[#00000031] backdrop-blur-sm  relative z-50    ">
      <nav className=" flex  gap-8 justify-between max-w-[1304px] px-4   mx-auto pt-2 pb-3  items-center">
        <div className=" order-2 lg:order-1 md:w-[300px]">
          <h1 className="font-bold   bg-gradient-to-r  text-xl md:text-3xl">
            DigitalNe<span className="text-black bg-white px-2 rounded-full">X</span>a
          </h1>
        </div>
        <div className="order-1 lg:order-2 ">
          <div className="flex  basis items-center gap-3">
            <div
              onClick={() => setOpen(!open)}
              className="lg:hidden border border-gray-900 bg-[#111c] rounded-md shadow-xl p-2   text-lg "
            >
              {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
          <ul
            className={`lg:flex justify-between lg:w-[400px]  duration-200 shadow-xl lg:shadow-none z-50 absolute lg:static left-4 space-y-6 lg:space-y-0 items-center bg-[#000000e7] lg:bg-none lg:bg-transparent border border-gray-900   lg:border-none p-6 rounded-lg top-[56px] font-medium    ${
              open ? "scale-100 " : "scale-0 lg:scale-100"
            } `}
          >
            {navLinks}
          </ul>
        </div>
        <div className=" lg:basis-[20%] order-3 lg:order-3  justify-end lg:w-[300px]">
          <div>
            {user ? (
              <div className="flex justify-end">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost w-10  md:w-12 btn-circle avatar"
                  >
                    <div className="w-full rounded-full">
                      {user.photoURL ? (
                        <img src={user.photoURL} />
                      ) : (
                        <img src="https://i.ibb.co/vkyjrmB/7309681.jpg" />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content  mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>
                        <p>{user?.displayName}</p>
                      </a>
                    </li>
                    <li>
                      <p>Settings</p>
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Sing Out</button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <Link to={"/login"}>
                  <button className="py-2 px-4 text-sm rounded-lg duration-300 font-medium  capitalize  md:text-base   bg-white text-black">
                    login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
Header.propTypes = {
  handleThemeSwitch: PropTypes.func,
};
export default Header;
