import React from "react";


const data = ["FAQ", "Investor Relations", "Privacy", "Speed Test"];
const dataOne = ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"];
const dataTwo = [
  "Account",
  "Ways to Watch",
  "Corporate Information",
  "Only on Netflix",
];
const dataThree = ["Media Centre", "Terms of Use", "Contact Us"];



const Footer = () => {
    return (
      <div className="bg-black w-full h-full flex flex-row overflow-hidden justify-center items-center">
        <div className="flex flex-col py-2">
          {data &&
            data.map((item, index) => (
              <div key={index} className="text-[#707070]">
                {item}
              </div>
            ))}
        </div>
      </div>
    );
}

export default Footer;
