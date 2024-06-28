import React from "react";

const Links = () => {
  return (
    <div className="border-t border-b flex justify-start items-center h-16 font-semibold gap-12 mt-2 text-[20px] relative">
      <a
        href="#job-preview"
        className="flex flex-col items-center text-[#DC4A2D] ml-16"
      >
        <span className="mb-[-2px]">Job Preview</span>
        <span className="absolute bottom-[-1px] border-b-2 border-[#dc4a2d] w-12"></span>
      </a>
      <a href="#applicants" className="flex flex-col items-center">
        <span className="mb-[-2px]">Applicants</span>
      </a>
      <a href="#match-messages" className="flex flex-col items-center">
        <span className="mb-[-2px]">Match</span>
      </a>
      <a href="#job-applicant" className="flex flex-col items-center">
        <span className="mb-[-2px]">Messages</span>
      </a>
    </div>
  );
};

export default Links;
