import React from "react";
import Link from "next/link";
const MyList = () => {
    const shows = [
      {
        title: "The Lion King",
        src: "loin",
        description:
          "The Lion King is a 1994 American animated musical drama film[4] directed by Roger Allers and Rob Minkoff (in their feature directorial debuts), produced by Walt Disney Feature Animation and released by Walt Disney Pictures. The 32nd Disney animated feature film and the fifth produced during the Disney Renaissance, the film is inspired by William Shakespeare's Hamlet with elements from the Biblical stories of Joseph and Moses. It was written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. The film features an ensemble voice cast that includes Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Nathan Lane, Ernie Sabella, Rowan Atkinson and Robert Guillaume. Its original songs were written by composer Elton John and lyricist Tim Rice, with a score by Hans Zimmer.",
        btn: "Watch Trailer",
        href: "/kids",
      },
      {
        title: "Mickey Mouse: The Show",
        src: "mickey",
        description:
          "Mickey Mouse heads off on some exciting adventures and finds himself in fun, silly situations in different settings.",
        btn: "Watch Trailer",
        href: "/kids",
      },
      {
        title: "All Quiet on The Western Front",
        src: "west",
        description:
          "When 17-year-old Paul joins the Western Front in World War I, his initial excitement is soon shattered by the grim reality of life in the trenches.",
        btn: "Watch Trailer",
        href: "/comingsoon",
      },
      {
        title: "Wonder Women: The Strong Lady",
        src: "wonder",
        description:
          "Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, Atlas Entertainment and Cruel and Unusual Films, and distributed by Warner Bros. Pictures, it is the fourth installment of the DC Extended Universe (DCEU), the first film of the Wonder Woman trilogy within the shared universe, and a prequel/spin-off to Batman v Superman: Dawn of Justice (2016).[7] Directed by Patty Jenkins and written by Allan Heinberg from a story by Heinberg, Zack Snyder and Jason Fuchs, Wonder Woman stars Gal Gadot in the title role, alongside Chris Pine, Robin Wright, Danny Huston, David Thewlis, Connie Nielsen and Elena Anaya. It is the second live action theatrical film featuring Wonder Woman following her debut in Batman v Superman: Dawn of Justice.",
        btn: "Watch Trailer",
        href: "/home",
      },
      {
        title: "Suicide Squad",
        src: "suicide",
        description:
          "Suicide Squad is a 2016 American superhero film based on the DC Comics supervillain team of the same name. Produced by Warner Bros. Pictures, RatPac-Dune Entertainment, DC Films, and Atlas Entertainment, and distributed by Warner Bros. Pictures,[2] it is the third installment in the DC Extended Universe (DCEU), it was written and directed by David Ayer and stars an ensemble cast led by Will Smith, Jared Leto, Margot Robbie, Joel Kinnaman, Viola Davis, Jai Courtney, Jay Hernandez, Adewale Akinnuoye-Agbaje, Ike Barinholtz, Scott Eastwood, and Cara Delevingne. In the film, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat in exchange for reduced sentences.",
        btn: "Watch Trailer",
        href: "/movies",
      },
      {
        title: "House of Secrets",
        src: "hos",
        description:
          "An examination of the truths and theories surrounding the deaths of 11 members of a Delhi family.",
        btn: "Watch Trailer",
        href: "/comingsoon",
      },
      {
        title: "Spider Man",
        src: "spider",
        description:
          "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe",
        btn: "Watch Trailer",
        href: "/kids",
      },
      {
        title: "Casino Royale",
        src: "cas",
        description:
          "Casino Royale is a 1967 spy parody film originally distributed by Columbia Pictures featuring an ensemble cast. It is loosely based on the 1953 novel of the same name by Ian Fleming, the first novel to feature the character James Bond. The film stars David Niven as the original Bond, Sir James Bond 007. Forced out of retirement to investigate the deaths and disappearances of international spies, he soon battles the mysterious Dr. Noah and SMERSH. The film's tagline: Casino Royale is too much... for one James Bond! refers to Bond's ruse to mislead SMERSH in which six other agents are pretending to be James Bond, namely, baccarat master Evelyn Tremble (Peter Sellers); millionaire spy Vesper Lynd (Ursula Andress); Bond's secretary Miss Moneypenny (Barbara Bouchet); Bond's daughter with Mata Hari, Mata Bond (Joanna Pettet); and British agents Coop (Terence Cooper) and The Detainer (Daliah Lavi).",
        btn: "Watch Trailer",
        href: "/movies",
      },
    ];

  return (
    <div className="w-full bg-black flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <div className="text-white text-3xl font-medium mt-[50px] ml-10">
            My List
          </div>
          <div className="ml-auto flex flex-row gap-x-5  mr-12 mt-[20px] h-fit">
            <Link href="/alert">
              <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Learn More
              </span>
            </Link>
            <Link href="/settings">
              <button className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Go Back
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap px-10 w-full gap-x-14">
          {shows.map((show, index) => (
            <Link key={index} href={show.href}>
              <div className="flex flex-wrap  hover:scale-110 w-full my-6 border-2 h-fit rounded-lg border-gray-900 lg:w-[30%]">
                <img
                  src={`${show.src}.jpg`}
                  className="w-full h-1/2 rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
