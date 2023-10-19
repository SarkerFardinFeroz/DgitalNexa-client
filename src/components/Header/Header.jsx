import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../Provider/AuthProvider";
import ToggelMode from "../ToggelMode/ToggelMode";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

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
      <li className="lg:hidden"><ToggelMode/></li>
    </>
  );
  return (
    <header className="  shadow-lg   relative  ">
      <nav className="navbar max-w-[1304px] px-4   mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] bg-base-100  p-2 shadow  rounded-box w-52"
            >
              {navLinks}
              
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            {" "}
            <h1 className="font-bold    text-xl md:text-3xl">
              DigitalNeXa
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5  px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center justify-end">
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
                    className="menu menu-sm dropdown-content  mt-3 z-[1] p-4 shadow-md border bg-base-100 rounded-box w-52"
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
                <div className="lg:flex items-center ">
                  <ToggelMode />
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <Link to={"/login"}>
                  <button className=" btn text-sm rounded-lg duration-300 font-medium  capitalize  md:text-base  " >
                    login
                  </button>
                </Link>
               <div className="hidden lg:flex items-center">
               <ToggelMode/>
               </div>
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
