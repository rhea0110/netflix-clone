import React from "react";

const dataOne = ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"];

const FooterOne = () => {
  return (
    <div className="bg-black w-full h-full flex flex-row justify-center items-center">
      <div className="flex flex-col py-2">
        {dataOne &&
          dataOne.map((item, index) => (
            <div key={index} className="whitespace-nowrap text-[#707070]">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterOne;
