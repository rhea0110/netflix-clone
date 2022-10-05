import React from "react";
import Link from "next/link";
const CominSoonCard = () => {
  const shows = [
    {
      title: "The Curse of Bridge Hollow",
      src: "curse",
      description:
        "A man and his daughter must team up to save their town after an ancient and mischievous spirit causes Halloween decorations to come to life and wreak havoc.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=Y-eYqE_X9N8",
    },
    {
      title: "The School for Good and Evil",
      src: "evil",
      description:
        "Best friends Sophie and Agatha find themselves on opposing sides of an epic battle when they're swept away into an enchanted school where aspiring heroes and villains are trained to protect the balance between good and evil.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=aftysDQ4hpI",
    },
    {
      title: "All Quiet on The Western Front",
      src: "west",
      description:
        "When 17-year-old Paul joins the Western Front in World War I, his initial excitement is soon shattered by the grim reality of life in the trenches.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=qFqgmaO15x4",
    },
    {
      title: "The Redeem Team",
      src: "team",
      description:
        "The U.S. Olympic Men's Basketball team travel to the 2008 Beijing Olympics to embark on a quest for the coveted gold medal that eluded them four years prior and make history for the team.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=UMmfRJdPPoE",
    },
    {
      title: "House of Secrets",
      src: "hos",
      description:
        "An examination of the truths and theories surrounding the deaths of 11 members of a Delhi family.",
      btn: "Watch Trailer",
      href: "",
    },
    {
      title: "Stranger Things",
      src: "str",
      description:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    },
  ];

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col">
        <div className="text-white text-3xl font-medium mt-[55px] ml-10">
          Reality Shows
        </div>
        <div className="flex flex-wrap px-10 w-full gap-x-14">
          {shows.map((show, index) => (
            <div
              key={index}
              className="flex hover:scale-110 hover:animate-pulse flex-wrap w-full my-6 border-2 h-fit rounded-lg border-red-600 lg:w-[30%]"
            >
              <img
                src={`${show.src}.jpg`}
                className="w-full h-1/2 rounded-t-lg"
              />
              <div className="p-5 h-fit ">
                <span className="text-lg text-center truncate text-white font-semibold">
                  {show.title}
                </span>
                <br />
                <span className="text-md line-clamp-3 mt-4 text-left text-white font-normal">
                  {show.description}
                </span>
                <div className="flex flex-row">
                  <Link href={show.href}>
                    <a>
                      <div className=" w-fit flex ml-auto pt-6 ">
                        <span className="text-md flex cursor-pointer flex-wrap gap-x-1 text-center border-2 border-red-600 py-1.5 px-4 text-white font-light">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>

                          {show.btn}
                        </span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/alert">
                    <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CominSoonCard;
