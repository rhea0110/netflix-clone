import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import DataCard from "../components/DataCard";

const shows = [
  {
    title: "Wonder Women: The Strong Lady",
    src: "wonder",
    description:
      "Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, Atlas Entertainment and Cruel and Unusual Films, and distributed by Warner Bros. Pictures, it is the fourth installment of the DC Extended Universe (DCEU), the first film of the Wonder Woman trilogy within the shared universe, and a prequel/spin-off to Batman v Superman: Dawn of Justice (2016).[7] Directed by Patty Jenkins and written by Allan Heinberg from a story by Heinberg, Zack Snyder and Jason Fuchs, Wonder Woman stars Gal Gadot in the title role, alongside Chris Pine, Robin Wright, Danny Huston, David Thewlis, Connie Nielsen and Elena Anaya. It is the second live action theatrical film featuring Wonder Woman following her debut in Batman v Superman: Dawn of Justice.",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=sfM7_JLk-84",
  },
  {
    title: "Vikings",
    src: "vikings",
    description:
      "Vikings is a historical drama television series created and written by Michael Hirst for the History channel, a Canadian network. Filmed in Ireland, it premiered on March 3, 2013, in Canada. The series concluded on December 30, 2020, when the second half of the sixth season was released in its entirety on Amazon Prime Video in Ireland, ahead of its broadcast on History in Canada from January 1 to March 3, 2021. A sequel series, titled Vikings: Valhalla, premiered on Netflix on February 25, 2022.",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=Yi4YnwFT7Gk",
  },
  {
    title: "Sherlock Holmes",
    src: "sherl",
    description:
      "Sherlock Holmes is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=J7nJksXDBWc",
  },
  {
    title: "Enola Holmes",
    src: "enola",
    description:
      "Enola Holmes is a 2020 mystery film based on the first book in the young adult fiction series of the same name by Nancy Springer. The story is about the teenage sister of the already-famous Sherlock Holmes, who travels to London to find her missing mother but ends up on a thrilling adventure, pairing up with a runaway lord as they attempt to solve a mystery that threatens the entire country. The film is directed by Harry Bradbeer, from a screenplay by Jack Thorne. Millie Bobby Brown stars as the title character, while also serving as a producer on the film. The film also stars Henry Cavill, Sam Claflin, and Helena Bonham Carter.",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=1d0Zf9sXlHk",
  },
  {
    title: "Spider Man: The 24hr Saga",
    src: "spiderhome",
    description:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=t06RUxPbp_c",
  },
  {
    title: "Lucifer",
    src: "luci",
    description:
      "Lucifer is an American urban fantasy television series developed by Tom Kapinos that premiered on January 25, 2016, and concluded on September 10, 2021. It is based on the DC Comics character created by Neil Gaiman, Sam Kieth, and Mike Dringenberg. The character was introduced in the comic book series The Sandman and later became the protagonist of a spin-off comic book series. Both series were published by DC Comics' Vertigo imprint. The television series was produced by Jerry Bruckheimer Television, DC Entertainment and Warner Bros. Television.",
    btn: "Watch Trailer",
    href: "https://www.youtube.com/watch?v=A5QBmphmLbc",
  },
]; 


const TvShows = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="h-full bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <DataCard data={ shows } />
        </div>
      </div>
    </>
  );
};

export default TvShows;
