import React from "react";
const data = [
"What is Netflix?",
"How much does Netflix cost?",
"Where can I watch?",
"How do I cancel?",
"What can I watch on Netflix?",
"Is Netflix good for kids?",
];
const Faqs = () => {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl w-full items-center font-bold text-white pb-8">
          Frequently Asked Questions
        </h1>
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-[#2D3033] font-normal text-2xl flex justify-between items-center px-4 my-3 text-white w-1/2 h-[65px]"
            >
              {item}
              <div className="ml-auto h-fit py-4 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    );
}

export default Faqs;