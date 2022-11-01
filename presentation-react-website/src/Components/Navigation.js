import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import downloadPic from "../Components/images/Fashion_Brand_Art_Design_Logo__1_-removebg-preview.png";
import BrandLogo from "../Components/images/Fashion_Brand_Art_Design_Logo__1_-removebg-preview.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  let activeStyle = {
    fontWeight: "bold",
    color: "#7a0000",
    PageTransitionEvent: "smooth",
  };

  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="">
      <nav className="bg-[#e9e6ff] flex md:block justify-between overflow-hidden z-10 fixed w-full shadow-lg">
        <div className="md:flex justify-between items-center mx-3" id="navBar">
          <div className="">
            <a href target="_blank" rel="noreferrer">
              <NavLink
                to="/home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <img
                  src={BrandLogo}
                  className="w-16 md:w-16 2xl:w-20 inline  rounded-full bg-[#d1cbff] cursor-pointer hover:bg-transparent hover:ml-4  transition-all ease-in-out duration-500"
                  alt=""
                />
              </NavLink>
            </a>
          </div>
          <div
            className={
              showIcon
                ? "md:flex pl-3 z-[-1] md:z-auto md:static  transition-all ese-in duration-500"
                : "md:flex pl-3 z-[-1] md:z-auto md:static hidden  transition-all ese duration-500"
            }
            id="hManubtn"
          >
            {/* manu button */}
            <div className="my-auto grid grid-cols-1 md:grid-cols-4 gap-2 mr-10 md:text-center ">
              <a
                href={URL}
                className="text-sm xl:text-lg font-extralight cursor-pointer my-3 mt-5 md:mt-0 md:my-0 hover:font-semibold  transition-all ease-in-out duration-500 "
              >
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </a>
              <a
                href={URL}
                className="text-sm xl:text-lg  font-extralight cursor-pointer my-2 md:my-0 hover:font-semibold  transition-all ease-in-out duration-500"
              >
                <NavLink
                  to="/aboutme"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About Me
                </NavLink>
              </a>
              <a
                href={URL}
                className="text-sm xl:text-lg  font-extralight cursor-pointer my-2 md:my-0 hover:font-semibold transition-all ease-in-out duration-500"
              >
                <NavLink
                  to="/service"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Service
                </NavLink>
              </a>
              <a
                href={URL}
                className="text-sm xl:text-lg font-extralight cursor-pointer my-3 md:my-0 hover:font-semibold  transition-all ease-in-out duration-500"
              >
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact
                </NavLink>
              </a>
            </div>
            {/* cv download button */}
            <a
              className="cvDownload px-1 download my-3 md:my-0 "
              download="CV comming soon"
              href={downloadPic}
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        {/* mobile manubar icon */}
        <div className="md:hidden mr-2 mt-2">
          <FontAwesomeIcon
            icon={faBars}
            className="mr-4 mt-4 text-xl"
            onClick={() => setShowIcon(!showIcon)}
            id="bar"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
