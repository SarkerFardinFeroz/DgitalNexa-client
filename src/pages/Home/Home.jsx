import { useLoaderData } from "react-router-dom";
import BrandCards from "../../components/BrandCards/BrandCards";
import Banner from "../../components/Banner/Banner";
import Marquee from "react-fast-marquee";

const Home = () => {
  const brandCards = useLoaderData();
  return (
    <main>
      <div className="mt-[-70px]">
        <Banner />
      </div>

      <div className=" bg-white text-black  ">
        <div className="max-w-[1504px] px-4   mx-auto">
          <h1 className="text-6xl font-Caveat font-bold py-6 text-center">
            Popular Brands 
          </h1>
          <div className=" w-[200px] md:w-[600px] mx-auto h-[2px] bg-black"></div>
          <div className="text-black font-semibold">
            <Marquee direction="left" speed="20" pauseOnClick>
              {brandCards.map((card, idx) => (
                <BrandCards key={idx} card={card} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
