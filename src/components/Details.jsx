import React from "react";
import { GoPencil } from "react-icons/go";
import Skills from "./Skills";
import About from "./About";
import Company from "./Company";

const Details = () => {
  return (
    <div className="flex border border-gray-300 rounded-lg">
      <div className="w-3/4 bg-white shadow-md py-4">
        <div className="flex items-center gap-4 mb-5 ml-16">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold text-[35px] mr-4 mt-3">
              Senior Product Designer
            </h2>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="text-gray-500 text-sm font-medium ml-2">
              posted 2 days ago
            </div>
          </div>
          <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-700">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>Open</span>
          </div>
        </div>
        <div className="mb-4 flex items-center space-x-4 ml-16">
          <div className="flex items-center text-gray-600 font-medium text-lg">
            <img src="/marker-pin-01.png" className="mr-2" alt="Location" />
            <span>Delaware, USA</span>
          </div>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <div className="flex items-center text-gray-600 font-medium text-lg">
            <img src="/coins-stacked-03.png" className="mr-2" alt="Salary" />
            <span>$300-$400k</span>
          </div>
        </div>
        <Skills />
        <About />
        <Company />
      </div>

      <div className="w-1/4 bg-gray-50 shadow-md px-4 py-8">
        <div className="mb-4 flex items-center justify-around gap-2">
          <button className="flex items-center justify-center w-44 h-12 bg-red-100 text-red-600 px-3 py-6 rounded-lg">
            <img src="/Icon.png" className="mr-2" alt="Delete job" />
            Delete job
          </button>
          <button className="flex items-center justify-center w-44 h-12 bg-red-600 text-white px-3 py-6 rounded-lg">
            <GoPencil className="mr-2" />
            Edit Job
          </button>
        </div>

        <ul className="list-none space-y-2 px-3">
          <li className="flex items-center justify-between py-4 border-b border-black border-opacity-25">
            <div className="flex items-center">
              <img src="/users-01.png" className="mr-2" alt="Applicants" />
              <span className="text-gray-700">Applicants</span>
            </div>
            <div className="font-medium">
              <p>400</p>
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-black border-opacity-25">
            <div className="flex items-center">
              <img src="/Icon (1).png" className="mr-2" alt="Matches" />
              <span className="text-gray-700">Matches</span>
            </div>
            <div className="font-medium">
              <p>100</p>
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-black border-opacity-25">
            <div className="flex items-center">
              <img
                src="/message-square-01.png"
                className="mr-2"
                alt="Messages"
              />
              <span className="text-gray-700">Messages</span>
            </div>
            <div className="font-medium">
              <p>147</p>
            </div>
          </li>
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src="/eye.png" className="mr-2" alt="Views" />
              <span className="text-gray-700">Views</span>
            </div>
            <div className="font-medium">
              <p>800</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
