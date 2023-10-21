import { useLoaderData } from "react-router-dom";
import BrandCards from "../../components/BrandCards/BrandCards";
import Banner from "../../components/Banner/Banner";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import PopularProducts from "../../components/PopularProducts/PopularProducts";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://digital-nexa-server.vercel.app/products/Apple")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const brandCards = useLoaderData();
  return (
    <main>
      <div>
        <Banner />
      </div>

      <div className="max-w-[1504px] px-4   mx-auto">
        <div>
          <h1 className="text-6xl font-Caveat font-bold py-6 text-center">
            Popular Brands
          </h1>
          <div className=" w-[200px] md:w-[600px] mx-auto h-[2px] bg-[#00000063]"></div>
          <div className="text-black font-semibold">
            <Marquee direction="left" speed="20" pauseOnClick>
              {brandCards.map((card, idx) => (
                <BrandCards key={idx} card={card} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="py-10">
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                

          {data.slice(0,4).map((product, idx) => (
            <PopularProducts key={idx} product={product} />
          ))}
          </div>
        </div>

        <div>
          <div className="bg-slate-900 relative ">
            <div className="bg-black z-10 h-full absolute top-0 left-0 right-0 bottom-0  opacity-70 "></div>
            <div className="bg-[url('https://i.ibb.co/M7b73Xf/sony-Banner.jpg')] ">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 relative z-20">
                <div className="flex text-6xl font-Caveat text-white  justify-center">
                  About Us
                </div>
                <div className=" w-[200px] md:w-[600px] mx-auto h-[2px] bg-white"></div>
                <div className="max-w-3xl text-center mx-auto">
                  <h1 className="block font-medium text-gray-200  ">
                    Welcome to DigitalNeXa, your one-stop destination for all
                    things mobile! At PhoneBazar, we're more than just a store;
                    we're a community of tech enthusiasts, dedicated to bringing
                    you the latest and greatest in the world of smartphones,
                    accessories, and cutting-edge gadgets.
                  </h1>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                  <p className="text-lg text-white">Why Choose Us?</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-white">100%</h1>
                    <p className="text-gray-300">Premium Quality Products</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-white">2000+</h1>
                    <p className="text-gray-300">Wide selections</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-white">
                      Affordable
                    </h1>
                    <p className="text-gray-300"> Competitive Pricing</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-white">
                      {" "}
                      Trust Worthy
                    </h1>
                    <p className="text-gray-300">Return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
