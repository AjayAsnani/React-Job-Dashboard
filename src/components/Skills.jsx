import React from "react";

const Skills = () => {
  const skills = [
    { img: "/image 1.png", name: "Figma", width: "w-20" },
    { img: "/image 2.png", name: "Adobe Illustrator", width: "w-40" },
    { img: "/image 6.png", name: "Adobe XD", width: "w-28" },
  ];

  const details = [
    { label: "Preferred Language", value: "English" },
    { label: "Type", value: "Full Time" },
    { label: "Years of Experience", value: "3+ Years of Experience" },
  ];

  return (
    <div className="pt-10 pb-8 flex gap-24 border-b">
      <div>
        <p className="text-sm font-medium text-gray-500 ml-16">
          Skills Required
        </p>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 rounded-full border px-1 ml-16 border-gray-400 mt-2 ${skill.width}`}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {details.map((detail, index) => (
        <div key={index}>
          <p className="text-sm font-medium text-gray-500">{detail.label}</p>
          <p className="text-base font-semibold text-gray-800 mt-1">
            {detail.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
