import React from "react";
const dataThree = ["Media Centre", "Terms of Use", "Contact Us"];

const FooterThree = () => {
  return (
    <div className="bg-black w-full h-full flex flex-row justify-center items-center">
      <div className="flex flex-col py-2">
        {dataThree &&
          dataThree.map((item, index) => (
            <div key={index} className="text-[#707070]">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterThree;
