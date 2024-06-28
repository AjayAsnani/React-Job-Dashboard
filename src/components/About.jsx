import React from "react";

const About = () => {
  const jobDetails = [
    "Handle the UI/UX research design",
    "Work on researching on latest web applications designs & trends",
    "Work on conceptualizing and visualizing",
    "Work on creating graphics content and other graphic related works",
  ];

  const benefits = ["Health insurance", "Provident Fund"];

  const schedule = ["Day Shift"];

  const payTypes = ["Performance bonus", "Yearly bonus"];

  return (
    <div className="mx-auto py-8 border-b">
      <p className="text-sm text-gray-500 font-semibold mb-1 ml-16">
        About the job
      </p>
      {jobDetails.map((detail, index) => (
        <p
          key={index}
          className="text-base font-medium text-gray-800 mb-1 ml-16"
        >
          {index + 1}. {detail}
        </p>
      ))}
      <p className="text-base font-medium text-gray-800 mb-1 ml-16">
        Benefits:
      </p>
      <ul className="list-disc list-inside mb-4 ml-3">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="text-base font-medium text-gray-800 mb-1 ml-16"
          >
            {benefit}
          </li>
        ))}
      </ul>
      <p className="text-base font-medium text-gray-800 mb-1 ml-16">
        Schedule:
      </p>
      <ul className="list-disc list-inside mb-4 ml-3">
        {schedule.map((item, index) => (
          <li
            key={index}
            className="text-base font-medium text-gray-800 mb-1 ml-16"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="text-base font-medium text-gray-800 mb-1 ml-16">
        Supplemental pay types:
      </p>
      <ul className="list-disc list-inside mb-4 ml-3">
        {payTypes.map((payType, index) => (
          <li
            key={index}
            className="text-base font-medium text-gray-800 mb-1 ml-16"
          >
            {payType}
          </li>
        ))}
      </ul>
      <p className="text-base font-medium text-gray-800 mb-1 ml-16">
        Work Location: In person
      </p>
    </div>
  );
};

export default About;
