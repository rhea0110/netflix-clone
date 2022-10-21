import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import DataCard from "../components/DataCard";
 const shows = [
   {
     title: "Joker",
     src: "joker",
     description:
       "Lucifer[a] is one of various figures in folklore associated with the planet Venus. The entity's name was subsequently absorbed into Christianity as a name for the devil. Modern scholarship generally translates the term in the relevant Bible passage (Isaiah 14:12), where the Greek Septuagint reads ὁ ἑωσφόρος ὁ πρωὶ, as morning star or shining one rather than as a proper noun, Lucifer, as found in the Latin Vulgate.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
   },
   {
     title: "Suicide Squad",
     src: "suicide",
     description:
       "Suicide Squad is a 2016 American superhero film based on the DC Comics supervillain team of the same name. Produced by Warner Bros. Pictures, RatPac-Dune Entertainment, DC Films, and Atlas Entertainment, and distributed by Warner Bros. Pictures,[2] it is the third installment in the DC Extended Universe (DCEU), it was written and directed by David Ayer and stars an ensemble cast led by Will Smith, Jared Leto, Margot Robbie, Joel Kinnaman, Viola Davis, Jai Courtney, Jay Hernandez, Adewale Akinnuoye-Agbaje, Ike Barinholtz, Scott Eastwood, and Cara Delevingne. In the film, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat in exchange for reduced sentences.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=CmRih_VtVAs",
   },
   {
     title: "Casino Royale",
     src: "cas",
     description:
       "Casino Royale is a 1967 spy parody film originally distributed by Columbia Pictures featuring an ensemble cast. It is loosely based on the 1953 novel of the same name by Ian Fleming, the first novel to feature the character James Bond. The film stars David Niven as the original Bond, Sir James Bond 007. Forced out of retirement to investigate the deaths and disappearances of international spies, he soon battles the mysterious Dr. Noah and SMERSH. The film's tagline: Casino Royale is too much... for one James Bond! refers to Bond's ruse to mislead SMERSH in which six other agents are pretending to be James Bond, namely, baccarat master Evelyn Tremble (Peter Sellers); millionaire spy Vesper Lynd (Ursula Andress); Bond's secretary Miss Moneypenny (Barbara Bouchet); Bond's daughter with Mata Hari, Mata Bond (Joanna Pettet); and British agents Coop (Terence Cooper) and The Detainer (Daliah Lavi).",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=GV_18deeAXk",
   },
   {
     title: "Mission: Impossible Fallout",
     src: "fall",
     description:
       "Mission: Impossible – Fallout is a 2018 American action spy film written and directed by Christopher McQuarrie. It is the sequel to Mission: Impossible – Rogue Nation (2015) and is the sixth installment in the Mission: Impossible film series. The film stars Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Henry Cavill, Sean Harris, Michelle Monaghan, and Alec Baldwin. In Mission: Impossible – Fallout, Ethan Hunt (Cruise) and his Impossible Missions Force (IMF) team seek to prevent nuclear weapon technology from reaching the Apostles, a bioterrorist offshoot of the Syndicate.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=wb49-oV0F78",
   },
   {
     title: "Top Gun",
     src: "gun",
     description:
       "Top Gun is a 1986 American action film directed by Tony Scott, and produced by Don Simpson and Jerry Bruckheimer, in association with Paramount Pictures. The screenplay was written by Jim Cash and Jack Epps Jr., and was inspired by an article titled Top Guns, written by Ehud Yonay and published in California magazine three years earlier. The film stars Tom Cruise and Kelly McGillis, with Val Kilmer, Anthony Edwards, and Tom Skerritt in supporting roles. Cruise plays Lieutenant Pete Maverick Mitchell, a young naval aviator aboard the aircraft carrier USS Enterprise. He and his radar intercept officer, Lieutenant (junior grade) Nick Goose Bradshaw (Edwards), are given the chance to train at the US Navy's Fighter Weapons School at Naval Air Station Miramar in San Diego, California.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=giXco2jaZ_4",
   },
   {
     title: "Aladin",
     src: "ala",
     description:
       "Aladdin is a 2019 American musical fantasy film produced by Walt Disney Pictures. Directed by Guy Ritchie, from a script he co-wrote with John August, it is a live-action adaptation of Disney's 1992 animated film of the same name, which itself is based on the eponymous tale from One Thousand and One Nights.[1][a] The film stars Will Smith with Mena Massoud, Naomi Scott, Marwan Kenzari, Navid Negahban, Nasim Pedrad and Billy Magnussen. The plot follows Aladdin, a street urchin, as he falls in love with Princess Jasmine, befriends a wish-granting Genie, and battles the wicked sorcerer Jafar.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=VcBllhVj1eA",
   },
 ];

const Movies = () => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <div className="h-full bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <DataCard data={shows} />
        </div>
      </div>
    </>
  );
};

export default Movies;
