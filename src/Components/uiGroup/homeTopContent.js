import React from "react";
import home_image from "../../images/Rectangle 5.png";
import Button from "../uiElemnts/button";
import get_started from "../../images/black button.png";

const HomeTopContent = () => {
  return (
    <div className="bg-[#3A424D] w-full h-[334px] mt-[62px] relative">
      <div className="flex items-start justify-between flex-col w-[272px] ml-[90px] mt-[46px]">
        <ul className="flex flex-shrink-0 items-start justify-between flex-col mb-2 ">
          <li>
            <p className="font-poppins font-semibold text-2xl leading-relaxed text-white mb-2 ">
              Hello Sushant <br /> Welcome Back to Library
            </p>
            {/* <p className="font-poppins font-semibold text-2xl leading-relaxed text-white ">
              Welcome Back to Library
            </p> */}
          </li>
          <li className="flex text-white font-poppins  font-normal text-base  leading-relaxed w-[323px]">
            Strong people don’t put others down. they lift them up.
          </li>
          <li className=" ">
            <button className=" rounded-md">
              <img src={get_started} alt="" className=" mt-6" />
            </button>
          </li>
        </ul>
      </div>

      <div className="absolute  bottom-0 left-[552px]">
        <img src={home_image} alt="" />
      </div>
    </div>
  );
};

export default HomeTopContent;
