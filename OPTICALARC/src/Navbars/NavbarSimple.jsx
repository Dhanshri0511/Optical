import React, { useState, useEffect, useRef } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import opticalarc from '../Images/opticalarc.jpg';

const NavList = ({ isMobileView }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobileView) {
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileView) {
      setIsServicesOpen(true);
    }
  };

  const handleServicesClick = () => {
    if (isMobileView) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Home</a>
        </Typography>
      </Link>
      <Link to="/Aboutus">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">About us</a>
        </Typography>
      </Link>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={dropdownRef}
      >
        <Link to="/Services">
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-serif text-xl cursor-pointer"
          onClick={handleServicesClick}
        >
          
          <a className="flex items-center hover:text-blue-500 transition-colors">
            Services
          </a>
        </Typography>
        </Link>
        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-[18rem] lg:w-[32rem] xl:w-[26rem] lg:m-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Industries</Typography>
                <Link to="/Automotive">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Automotive Industry</Typography>
                </Link>
                <Link to="/Ecommerce">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Ecommerce App Development</Typography>
                </Link>
                <Link to="/Banking">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Banking and Finance App Development</Typography>
                </Link>
                <Typography variant="h6" className="font-bold mb-2 text-black">Education</Typography>
                <Link to="/Educationnn">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Education App Development</Typography>
                </Link>
                <Link to="/Learning">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Learning Management System</Typography>
                </Link>
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Solutions</Typography>
                <Link to="/Enterprises">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Enterprise Mobile App Development</Typography>
                </Link>
                <Link to="/Tracking">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Tracking and Delivery</Typography>
                </Link>
                <Link to="/Marketplace">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Marketplace App Development</Typography>
                </Link>
                <Link to="/Demand">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">On Demand Services App Development</Typography>
                </Link>
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Technology</Typography>
                <Link to="/Ios">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">IOS App Development</Typography>
                </Link>
                <Link to="/Firebase">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Firebase Development Services</Typography>
                </Link>
                <Link to="/React1">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">React Native App Development</Typography>
                </Link>
                <Link to="/Android">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Android App Development</Typography>
                </Link>
                <Link to="/Dbms">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">DBMS</Typography>
                </Link>
              </div>
              <div>
                <Link to="/AppMaintenance">
                  <Typography as="a" className="block font-bold mb-2 text-black hover:text-blue-500">App Maintenance and support</Typography>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to="/Portfolio">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Portfolio</a>
        </Typography>
      </Link>
      <Link to="/Careers">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Careers</a>
        </Typography>
      </Link>
      <Link to="/Contactus">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Contact us</a>
        </Typography>
      </Link>
    </ul>
  );
};

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 960);

  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth < 960);
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto bg-blue-300 rounded-none">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center w-[8rem]">
          <img src={opticalarc} alt="Opticalarc Logo" className="w-12 h-12" />
        </div>
        <div className="hidden lg:flex">
          <NavList isMobileView={isMobileView} />
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <NavList isMobileView={isMobileView} />
        </div>
      )}
    </Navbar>
  );
}
