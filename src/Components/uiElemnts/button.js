import React from "react";
import btn_icon from "../../images/Group 427318227.svg";

const Button = ({ handleBackToTop, title, imageUrl }) => {
  return (
    <div>
      <button
        className="relative top-[200px] right-[40px]"
        onClick={handleBackToTop}
      >
        <img src={btn_icon} alt="Back top icon" className="" />
        <h1 className="text-white font-Poppins text-base relative bottom-[33px] ">
          {title}
        </h1>
      </button>
    </div>
  );
};

export default Button;
