import React from "react";

const Company = () => {
  const infoItems = [
    {
      label: "Company size",
      value: "1k - 2k Employees",
    },
    {
      label: "Sector",
      value: "Information Technology, Infrastructure",
    },
    {
      label: "Founded In",
      value: "2019",
    },
    {
      label: "Type",
      value: "Private",
    },
    {
      label: "Funding",
      value: "Bootstrapped",
    },
    {
      label: "Founded By",
      value: "Scott Farquhar, Mike Cannon-Brookes",
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center mb-4 ml-16">
        <img
          src="/Rectangle 43.png"
          alt="Company Logo"
          className="h-12 w-12 mr-4"
        />
        <span className="text-xl font-medium">Atlassian</span>
      </div>
      <div className="flex items-start justify-start gap-16 ml-16">
        <div className="mt-5 space-y-4">
          {infoItems.slice(0, 3).map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 font-medium mb-1">
                {item.label}
              </p>
              <p className="text-base text-gray-800 font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-4">
          {infoItems.slice(3).map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 font-medium mb-1">
                {item.label}
              </p>
              <p className="text-base text-gray-800 font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
