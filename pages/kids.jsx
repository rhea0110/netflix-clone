import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import DataCard from "/components/DataCard";

 const shows = [
   {
     title: "Mickey Mouse: The Show",
     src: "mickey",
     description:
       "Mickey Mouse heads off on some exciting adventures and finds himself in fun, silly situations in different settings.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=rIYadOpFMsk",
   },
   {
     title: "The life of Rapunzel",
     src: "rap",
     description:
       "Tangled is a 2010 American 3D computer-animated musical adventure fantasy comedy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=ycoY201RTRo",
   },
   {
     title: "The Lion King",
     src: "loin",
     description:
       "The Lion King is a 1994 American animated musical drama film[4] directed by Roger Allers and Rob Minkoff (in their feature directorial debuts), produced by Walt Disney Feature Animation and released by Walt Disney Pictures. The 32nd Disney animated feature film and the fifth produced during the Disney Renaissance, the film is inspired by William Shakespeare's Hamlet with elements from the Biblical stories of Joseph and Moses. It was written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. The film features an ensemble voice cast that includes Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Nathan Lane, Ernie Sabella, Rowan Atkinson and Robert Guillaume. Its original songs were written by composer Elton John and lyricist Tim Rice, with a score by Hans Zimmer.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=7TavVZMewpY",
   },
   {
     title: "Toy Story",
     src: "stoy",
     description:
       "Toy Story is a 1995 American computer-animated comedy film directed by John Lasseter (in his feature directorial debut), produced by Pixar Animation Studios and released by Walt Disney Pictures. The first installment in the Toy Story franchise, it was the first entirely computer-animated feature film, as well as the first feature film from Pixar. It was written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow from a story by Lasseter, Stanton, Pete Docter, and Joe Ranft. The film features music by Randy Newman, was produced by Bonnie Arnold and Ralph Guggenheim, and was executive-produced by Steve Jobs and Edwin Catmull. The film features the voices of Tom Hanks, Tim Allen, Don Rickles, Jim Varney, Wallace Shawn, John Ratzenberger, Annie Potts, R. Lee Ermey, John Morris, Laurie Metcalf, and Erik von Detten.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=wmiIUN-7qhE",
   },
   {
     title: "Spider Man",
     src: "spider",
     description:
       "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
   },
   {
     title: "Minnie Mouse & friends",
     src: "minnie",
     description:
       "Minnie Mouse is a cartoon character created by The Walt Disney Company. As the longtime sweetheart of Mickey Mouse, she is an anthropomorphic mouse with white gloves, a bow, polka-dotted dress, white bloomers, and low-heeled shoes occasionally with ribbons on them. The Mickey Mouse comic strip story The Gleam (published January 19 – May 2, 1942) by Merrill De Maris and Floyd Gottfredson first gave her full name as Minerva Mouse, although this is seldom used.",
     btn: "Watch Trailer",
     href: "https://www.youtube.com/watch?v=xHU5Fnzxcm4",
   },
 ];

const Kids = () => {
  return (
    <>
      <Head>
        <title>Kids</title>
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

export default Kids;
