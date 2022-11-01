/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import {
  faListCheck,
  faMedal,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Helmet } from "react-helmet";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import Img from "../Components/images/WhatsApp Image 2022-09-06 at 12.26.06 PM.jpeg";
import Svg from "./images/Computer login-bro.svg";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <div className="mt-32">
      <Helmet>
        <title>Ashraf Uz Mahim</title>
      </Helmet>
      <div className="lg:mb-28">
        <h2
          className="font-serif text-3xl 2xl:text-6xl text-center font-semibold text-[#7a0000] "
          style={{ textShadow: " 1px 1px 1px red, 2px 2px 1px #aaaaaa" }}
        >
          About Me
        </h2>
      </div>
      {/* image and details */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-14 md:gap-4 md:mx-8 my-12 md:my-20">
        <div className="bg-gradient-to-r from-[#d3b8ff4d] via-purple-400 to-[#d31cf823] w-56 h-56 lg:w-80 lg:h-80 rounded-xl mx-auto">
          <div>
            <img
              src={Img}
              alt="Ashraf_Uz_Mahim"
              className="w-56 h-56 lg:w-80 lg:h-80 rotate-12 hover:rotate-0 transition-all ease-in-out duration-500 rounded-xl"
              title="Ashraf Uz Mahim"
            />
          </div>
        </div>
        {/* text section */}
        <div>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4 "
              style={{
                border: "3px solid #9780ff",
              }}
            >
              <FontAwesomeIcon
                icon={faMedal}
                className="text-3xl 2xl:text-4xl text-[#4c00ff]"
              />
              <br />
              <div className="my-2">
                <span className="text-xl  2xl:text-2xl font-mono ">
                  Experience
                </span>
              </div>
              <span className="font-thin">1 Year Working</span>
            </div>
            <div
              className="text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4"
              style={{ border: "3px solid #9780ff" }}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl 2xl:text-4xl text-[#4c00ff]"
              />
              <br />
              <div className="my-2">
                <span className="text-xl  2xl:text-2xl font-mono">Clients</span>
              </div>
              <span className="font-thin">10+ Worldwide</span>
            </div>
            <div
              className="text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4"
              style={{ border: "3px solid #9780ff" }}
            >
              <FontAwesomeIcon
                icon={faListCheck}
                className="text-3xl 2xl:text-4xl text-[#4c00ff]"
              />
              <br />
              <div className="my-2">
                <span className="text-xl  2xl:text-2xl font-mono ">
                  Projects
                </span>
              </div>

              <span className="font-thin">20+ Completed</span>
            </div>
          </div>

          <div className="my-6">
            <p className="font-serif text-lg">
              I'm a professional web application designer & developer. DM me to
              work with me and for the best experience. I am definitely the best
              of my kind.
            </p>
          </div>
          <div className="my-7">
            <Link
              to={"contactSMedia"}
              smooth={true}
              offset={-80}
              duration={500}
              className="cvDownload cursor-pointer"
            >
              {" "}
              <div className="text-center">
                <span>Let's Talk</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* experience div started here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 mx-8 md:my-24 mb-20 lg:my-32 2xl:my-40">
        <div className="mx-auto">
          <span className="text-[#7a0000] font-semibold font-serif text-lg 2xl:text-2xl">
            -- My Experience
          </span>
          <div className="my-6">
            <span className="font-serif text-2xl 2xl:text-4xl font-semibold">
              I'm A Junior Front-End Developer (React JS)
            </span>
          </div>
          <div className="grid gap-1">
            <span className="uppercase text-[#1900ffad] font-bold">Html</span>
            <progress
              className="progress w-fullh-2 2xl:h-3 "
              value="98"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">Css</span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="90"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">Sass</span>
            <progress
              className="progress w-fullh-2 2xl:h-3"
              value="85"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">
              Bootstrap
            </span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="95"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">
              Tailwind
            </span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="99"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">
              JavaScript
            </span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="40"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">Jquery</span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="50"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">
              React js
            </span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="75"
              max="100"
            ></progress>
            <span className="uppercase text-[#1900ffad] font-bold">
              Photoshop
            </span>
            <progress
              className="progress w-full h-2 2xl:h-3"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="m-auto  order-first md:order-none">
          <img src={Svg} alt="" className="w-64 lg:w-96 " />
        </div>
      </div>
      {/* experience div end here */}

      {/* msg me  diffrent way */}

      <div id="contactSMedia" className="scroll-smooth">
        <div>
          <h2 className="font-serif text-3xl 2xl:text-6xl text-center font-semibold text-[#9c2b2b]">
            Contact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-6 2xl:gap-4 md:w-5/6 2xl:w-4/6 mx-4 md:mx-auto my-20">
          {/* whatsapp */}
          <div
            className="border text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4"
            style={{
              border: "3px solid #9780ff",
            }}
          >
            <WhatsAppIcon
              className="text-[#4c00ff]"
              style={{ fontSize: "30px" }}
            />
            <div className="my-3">
              <h3 className="text-xl 2xl:text-2xl font-mono font-semibold">
                Whatsapp
              </h3>
              <span className="font-mono">+8801749931891</span>
            </div>
            <a
              href={"https://wa.me/qr/24K3ZIFQ56TQF1"}
              target={"_blank"}
              className="hover:text-[#9c2b2b] transition-all ease-in-out duration-300 2xl:text-lg font-medium"
            >
              Send Message
            </a>
          </div>
          {/* email */}
          <div
            className="border text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4"
            style={{
              border: "3px solid #9780ff",
            }}
          >
            <EmailIcon
              className="text-[#4c00ff]"
              style={{ fontSize: "30px" }}
            />
            <div className="my-3">
              <h3 className="text-xl 2xl:text-2xl font-mono font-semibold">
                Email
              </h3>
              <span className="font-mono text-xs md:text-base">
                ashraf.uzzaman04082004@gmail.com
              </span>
            </div>
            <a
              href={"mailto:ashraf.uzzaman04082004@gmail.com"}
              target={"_blank"}
              className="hover:text-[#9c2b2b] transition-all ease-in-out duration-300 2xl:text-lg font-medium"
            >
              Send Message
            </a>
          </div>
          {/* messenger */}
          <div
            className="border text-center rounded-xl bg-[#aca6ff1c] hover:bg-transparent transition-all ease-in-out duration-500 py-4"
            style={{
              border: "3px solid #9780ff",
            }}
          >
            <ChatIcon className="text-[#4c00ff]" style={{ fontSize: "30px" }} />
            <div className="my-3">
              <h3 className="text-xl 2xl:text-2xl font-mono font-semibold">
                Messenger
              </h3>
              <span className="font-mono">Ashraf Uz Mahim</span>
            </div>
            <a
              href={"https://m.me/ashraf.uzmahim"}
              target={"_blank"}
              className="hover:text-[#9c2b2b] transition-all ease-in-out duration-300 2xl:text-lg font-medium"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
