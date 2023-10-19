import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex items-center max-w-[1304px] px-4  mx-auto flex-col justify-center lg:flex-row py-28 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <img src="https://i.ibb.co/yWyBMS6/404.png" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-bold text-white">
            Looks like you have found the doorway to the great nothing
          </h1>
          <p className="py-4 text-base text-white">
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </p>
          <p className="py-2 text-base text-white">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <div>
            <Link>
              <button className="w-full  lg:w-auto my-4 rounded-md px-1 sm:px-16 py-5 font-semibold bg-[#0bd408] duration-200 text-white hover:bg-[#0abd07] capitalize ">
                Go back to Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
