import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiSuitcaseLight } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center bg-[#E7E7E7] py-3 px-5 ">
        <button className="text-[#DC4A2D] font-bold text-lg">Logo</button>
      </div>

      <div className="flex space-x-8 px-5 py-2 border border-t-[0.5px] border-black-[100%] rounded-[36px] ">
        <a
          href="#home"
          className="rounded-[36px] flex items-center space-x-2 p-3 bg-[#DC4A2D] text-white border "
        >
          <PiSuitcaseLight className="h-5 w-5" />
          <span>Jobs</span>
        </a>
        <a
          href="#about"
          className="text-[#B0B0B0] flex items-center space-x-2 opacity-[70%]"
        >
          <div className="relative">
            <LuMessageSquare className="h-5 w-5 opacity-[70%]" />
            <img
              src="/Ellipse 5.png"
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 "
              alt="Top Right Icon"
            />
          </div>
          <span>Messages</span>
        </a>
        <a
          href="#contact"
          className="text-[#B0B0B0] flex items-center space-x-2 opacity-[70%]"
        >
          <img src="/coins-hand.png" className="h-5 w-5 " />
          <span>Payments</span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="#about"
          className="text-[#B0B0B0] flex items-center space-x-2 opacity-[70%]"
        >
          <div className="relative">
            <img src="/bell-02.png" className="h-6 w-6 " />
            <img
              src="/Ellipse 5.png"
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 "
              alt="Top Right Icon"
            />
          </div>
        </a>
        <img src="/right.png" alt="Notifications" className="h-7 w-7 " />
        <IoIosArrowDown alt="Down Arrow" className="h-5 w-5 " />
      </div>
    </nav>
  );
};

export default Navbar;
