import logo from "../images/logo.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex p-6 px-[1%] md:px-[5%] transition-all bg-zinc-500 pb-1">
        <img src={logo} alt="" className="h-10 w-10 mx-3 my-1" />
        <Link className="text-3xl text-white">AstronomyApp</Link>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`md:hidden text-4xl fixed cursor-pointer ml-[80vw] mt-2 ${
            open ? "hidden" : "visible"
          }`}
        >
          <Menu size={40} color="#ffffff"></Menu>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`md:hidden text-xl z-10 fixed cursor-pointer ml-[80vw] mt-2 h-4 w-4 ${
            open ? "visible" : "hidden"
          }`}
        >
          <X size={40} color="#ffffff"></X>
        </div>
        <div className="flex-col md:flex-row md:justify-end my-1 w-full h-10 hidden md:flex">
          <Link
            to="/"
            className="bg-white text-black h-10 hover:bg-black hover:text-white w-24 rounded-lg mx-1 leading-9  transition-all"
          >
            <div className="text-center align-bottom   transition-all">
              Home
            </div>
          </Link>
          <Link
            to="/apod"
            className="bg-white text-black h-10 hover:bg-black hover:text-white w-24 rounded-lg mx-1 leading-9  transition-all"
          >
            <div className="text-center align-bottom   transition-all">
              APOD
            </div>
          </Link>
          <Link
            to="/asteroids"
            className="bg-white text-black h-10 hover:bg-black hover:text-white w-24 rounded-lg mx-1 leading-9  transition-all"
          >
            <div className="text-center align-bottom   transition-all">
              Asteroids
            </div>
          </Link>
        </div>
        <div
          className={`fixed ml-[50%] mt-[800px] transition-all duration-[400] ${
            open ? "mt-0" : "mt-[-800px]"
          }`}
        >
          <div className="relative flex-col rounded-lg w-[200px] ml-[-50%] space-y-6 top-32 bg-white h-auto lg:flex-row lg:justify-end my-7 items-center justify-center flex md:hidden">
            <Link
              to="/"
              className="bg-white h-10 w-24 rounded-lg mx-1 leading-9"
            >
              <div className="text-center align-bottom hover:text-black hover:bg-white">
                Home
              </div>
            </Link>
            <Link
              to="/apod"
              className="bg-white h-10 w-24 rounded-lg mx-1 hover:text-black hover:bg-white"
            >
              <div className="text-center align-middle leading-9">APOD</div>
            </Link>
            <Link
              to="/asteroids"
              className="bg-white h-10 w-24 rounded-lg mx-1 hover:text-black hover:bg-white"
            >
              <div className="text-center align-middle leading-9">Asteroids</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
