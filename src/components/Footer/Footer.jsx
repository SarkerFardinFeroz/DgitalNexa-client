import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer max-w-[1304px] px-4 mx-auto p-10  text-base-content">
      <aside>
          <h1 className="font-bold  text-xl md:text-3xl">
            DigitalNeXa
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
          <p className="text-sm text-[#acacac] px-4">
            2023 © Sarker Fardin Feroz | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
