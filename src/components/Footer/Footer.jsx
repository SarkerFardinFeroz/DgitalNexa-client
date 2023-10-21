import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-2xl border-t  border-[#8e8d8d3f] mt-14">
      <footer className="footer max-w-[1304px] px-4 mx-auto p-10  text-base-content">
      <aside>
          <h1 className="font-bold font-Caveat pb-2  text-2xl md:text-4xl">
           <Link to={'/'}> DigitalNe<span className=" ml-1 bg-[#24dc7a] text-black px-2 rounded-full">X</span>a</Link>
          </h1>
          <p>
            123 Skyline Plaza Avenue
            <br />
            DigitalNeXa, Metro Tower
            <br />
            <br />
            <span className="text-primary-bg">
              +1 (555) 123-4567 (11:00AM - 09:00PM) <br /> Saturday - Thursday
            </span>
          </p>
        </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
      </footer>
      <div>
        <div className="w-[90%] mx-auto h-[1px] bg-[#868686]"></div>
        <div className="text-center py-5">
          <p className="text-sm  px-4">
            2023 © Sarker Fardin Feroz | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
