import { Outlet, useNavigation } from "react-router-dom";

import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layouts = () => {
  const navigation = useNavigation();
  return (
    <div className="font-Inter h-full text-white bg-black">
      <Header/>
      {navigation.state === "loading" ? (
        <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
          <InfinitySpin width="200" color="#24dc7a" />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Layouts;
