import React from "react";

const dataTwo = [
  "Account",
  "Ways to Watch",
  "Corporate Information",
  "Only on Netflix",
];

const FooterTwo = () => {
  return (
    <div className="bg-black w-full h-full flex flex-row justify-center items-center">
      <div className="flex flex-col py-2">
        {dataTwo &&
          dataTwo.map((item, index) => (
            <div key={index} className=" text-[#707070]">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterTwo;
