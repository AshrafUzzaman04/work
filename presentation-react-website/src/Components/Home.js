import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MyImg from "./images/WhatsApp_Image_2022-09-02_at_4.04.30_PM-removebg-preview.png";

const Home = () => {
  const navigate = useNavigate();
  const goContactPage = () => {
    navigate("/contact");
  };
  return (
    <div
      className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-h-max lg:h-screen mt-24 lg:mt-8 2xl:mt-0 "
      id="iAmHome"
    >
      <Helmet>
        <title>Ashraf Uz Mahim</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* text div section */}
      <div className="text-center px-4">
        <div>
          <span className="font-serif text-[#7a0000] font-bold text-sm 2xl:text-xl ">
            Hellow I'm
          </span>
          <div className=" my-2">
            <span className="text-4xl 2xl:text-6xl font-serif">
              Ashraf Uz mahim
            </span>
          </div>
          <span className="font-extralight text-sm 2xl:text-xl">
            Junior Font-End-Developer
          </span>
        </div>
        <div className="mt-4">
          <p className="md:w-3/4 2xl:w-1/2 mx-auto font-mono text-sm">
            I'm a junior web application designer & developer. Massege me to
            work with me and for the best experience. I am definitely the best
            of my kind.
          </p>
        </div>
        <div className="my-8">
          <button className="cta" onClick={goContactPage}>
            <div className="flex">
              <span>Let's Talk</span>
              <svg
                viewBox="0 0 13 10"
                height="10px"
                width="15px"
                className="my-auto"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </div>
      {/* picture div section */}
      <div className=" mx-auto my-20 lg:my-0">
        <div>
          <div
            className="bg-[#000] p-5 w-64 2xl:w-96 h-64 2xl:h-96 relative rounded-full"
            style={{ boxShadow: "0 0 5px 5px #2600ff96" }}
          >
            <img
              src={MyImg}
              alt=""
              className="absolute w-64 2xl:w-96 top-[-88px] 2xl:top-[-132px] "
              style={{
                left: "0px",
              }}
              title="Ashraf Uz Mahim"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
