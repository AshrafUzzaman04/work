import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faVideo,
  faPenNib,
  faCode,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <div className="mt-32">
      <Helmet>
        <title>Ashraf Uz Mahim</title>
      </Helmet>
      <div>
        <h2
          className="font-serif text-4xl 2xl:text-6xl text-center font-semibold text-[#7a0000]"
          style={{ textShadow: " 1px 1px 1px red, 2px 2px 1px #aaaaaa" }}
        >
          Services
        </h2>
      </div>
      {/* start service option */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 lg:my-20 mx-5 md:mx-8 gap-8 lg:gap-5 2xl:gap-12 text-center">
        {/* web desgin */}
        <div>
          <div>
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-4xl 2xl:text-5xl text-[#4c00ff]"
            />
          </div>
          <div className="my-3">
            <span className="text-2xl 2xl:text-3xl font-mono font-semibold text-[#535353]">
              Web Design
            </span>
          </div>
          <p className="font-extralight text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            quidem sit tenetur delectus corrupti! Consectetur placeat distinctio
            aut accusantium quo omnis nisi architecto, culpa id! Iure nihil
            dolor sint debitis doloribus itaque quia quas magnam eveniet
            tempore, iste possimus, rerum sequi dolorum odio quam!
          </p>
          {/* learn more button */}
          <div className="mt-4">
            <label htmlFor="my-modal" className="modal-button">
              <a
                href
                className="text-[#7a0000]  font-semibold uppercase cursor-pointer hover:text-[#ff7878] transition-all ease-in-out duration-300"
              >
                <FontAwesomeIcon icon={faCaretRight} className="mx-2" />
                Learn More
              </a>
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hellow friend!</h3>
                <p className="py-4">
                  To know more, you have to wait for some time.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Ok
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WEB development */}
        <div>
          <div>
            <FontAwesomeIcon
              icon={faCode}
              className="text-4xl 2xl:text-5xl text-[#4c00ff]"
            />
          </div>{" "}
          <div className="my-3">
            <span className="text-2xl 2xl:text-3xl font-mono font-semibold text-[#535353]">
              Web Development
            </span>
          </div>
          <p className="font-extralight text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            quidem sit tenetur delectus corrupti! Consectetur placeat distinctio
            aut accusantium quo omnis nisi architecto, culpa id! Iure nihil
            dolor sint debitis doloribus itaque quia quas magnam eveniet
            tempore, iste possimus, rerum sequi dolorum odio quam!
          </p>
          {/* learn more button */}
          <div className="mt-4">
            <label htmlFor="my-modal" className="modal-button">
              <a
                href
                className="text-[#7a0000]  font-semibold uppercase cursor-pointer hover:text-[#ff7878] transition-all ease-in-out duration-300"
              >
                <FontAwesomeIcon icon={faCaretRight} className="mx-2" />
                Learn More
              </a>
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hellow friend!</h3>
                <p className="py-4">
                  To know more, you have to wait for some time.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Ok
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphics Desgin */}
        <div>
          <div>
            <FontAwesomeIcon
              icon={faPenNib}
              className="text-4xl 2xl:text-5xl text-[#4c00ff]"
            />
          </div>
          <div className="my-3">
            <span className="text-2xl 2xl:text-3xl font-mono font-semibold text-[#535353]">
              Graphic Design
            </span>
          </div>
          <p className="font-extralight text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            quidem sit tenetur delectus corrupti! Consectetur placeat distinctio
            aut accusantium quo omnis nisi architecto, culpa id! Iure nihil
            dolor sint debitis doloribus itaque quia quas magnam eveniet
            tempore, iste possimus, rerum sequi dolorum odio quam!
          </p>
          {/* learn more button */}
          <div className="mt-4">
            <label htmlFor="my-modal" className="modal-button">
              <a
                href
                className="text-[#7a0000]  font-semibold uppercase cursor-pointer hover:text-[#ff7878] transition-all ease-in-out duration-300"
              >
                <FontAwesomeIcon icon={faCaretRight} className="mx-2" />
                Learn More
              </a>
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hellow friend!</h3>
                <p className="py-4">
                  To know more, you have to wait for some time.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Ok
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video editing */}
        <div>
          <div>
            <FontAwesomeIcon
              icon={faVideo}
              className="text-4xl 2xl:text-5xl text-[#4c00ff]"
            />
          </div>
          <div className="my-3">
            <span className="text-2xl 2xl:text-3xl font-mono font-semibold text-[#535353]">
              Video Editing
            </span>
          </div>
          <p className="font-extralight text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            quidem sit tenetur delectus corrupti! Consectetur placeat distinctio
            aut accusantium quo omnis nisi architecto, culpa id! Iure nihil
            dolor sint debitis doloribus itaque quia quas magnam eveniet
            tempore, iste possimus, rerum sequi dolorum odio quam!
          </p>
          {/* learn more button */}
          <div className="mt-4">
            <label htmlFor="my-modal" className="modal-button">
              <a
                href
                className="text-[#7a0000]  font-semibold uppercase cursor-pointer hover:text-[#ff7878] transition-all ease-in-out duration-300"
              >
                <FontAwesomeIcon icon={faCaretRight} className="mx-2" />
                Learn More
              </a>
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hellow friend!</h3>
                <p className="py-4">
                  To know more, you have to wait for some time.
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Ok
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
