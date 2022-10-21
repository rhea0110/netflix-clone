import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import DataCard from "../components/DataCard";

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
const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>ComingSoon</title>
      </Head>
      <div className="h-full bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <DataCard data= { shows } />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
