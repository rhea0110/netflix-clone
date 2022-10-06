import React from "react";
import Head from "next/head";
import Link from "next/link";
const OurNewsletter = () => {
 
  return (
    <>
      <Head>
        <title>Our Newsletter</title>
      </Head>
      <div>
        <div className="flex flex-row">
          <div className="text-red-500  text-3xl font-medium mt-[40px] ml-10">
            Newsletter
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
        <div className="p-10 font-mono leading-[33px]">
          Two years ago, people across the world found themselves locked inside
          their homes amid the Covid-19 pandemic, and desperately seeking
          diversions. Not surprisingly, Netflix saw its fortunes skyrocket. The
          OTT giant reportedly saw an addition of 36 million subscribers in
          2020. This was the highest annual growth the company had seen, since
          its video streaming debut in 2007. But, that was then. Multiple
          factors, ranging from increasing inflation to, even the Russian
          invasion of Ukraine, have been playing spoilers for it now. These
          pushed Netflix to consider rolling out affordable subscription plans
          that would be supported by advertising. While revealing the plan,
          Netflix Co-CEO Reed Hastings said that the company would look into the
          details involved over the next one year or two. How big a change this
          is for the company, after years of offering commercial-free content,
          was reflected in Hastings observation on the topic. He hadnt been in
          favour of advertising in the past. But catering to consumers who were
          willing to tolerate advertising in return for lower prices made a lot
          of sense, Hastings said. Basically, this is Netflixs AVOD play. The
          acronym AVOD stands for a business model associated with online video
          on demand, like SVOD and TVOD. SVOD is subscription-based video on
          demand, AVDO is advertisement-based video on demand and TVOD is
          transactional video on demand. On the face of it, this might seem
          counterintuitive, at least where India is concerned. According to a
          recent report by CII and Boston Consulting Group, over the past few
          years, India has seen a remarkable surge in SVOD content. Furthermore,
          the Indian OTT industry has been transitioning from the AVOD to the
          SVOD model. So, why such a move? It appears, theres still a lot of
          money to be made with the AVOD model. Last November, analysts at Media
          Partners Asias APOS India conference reportedly said that among OTT
          services, AVOD would continue to garner more revenue than SVOD. In
          fact, Indias AVOD market size is estimated to grow from 1.1 billion
          dollars in 2021 to 2.4 billion dollars in 2026, according to a
          Deloitte 2022 prediction report. Now, what would such a move mean for
          Netflix? Would Netflix have to change its content strategy to grow its
          ad business in India? At the moment, Netflix is identified by its
          premium content. Would that focus shift to more mass-oriented, local
          content? After all, mass reach is essential if it wants to capture the
          advertisers interest. Karan Taurani, senior vice-president, Elara
          Capital, says 60% AVOD revenue is dominated by aggregation and sports
          content, and AVOD market is focused on masses in terms of content.
          Entering AVOD market will be tough for Netflix, he believes. And, does
          this move by Netflix indicates that the future of the Indian OTT
          market is freemium? According to Karan Taurani of Elara Capital,
          Indian OTTs future will be a mix of AVOD and SVOD. SVOD base
          necessary for producing large-scale, expensive content and platforms
          transitioning to SVOD as consumers demand quality content, says
          Taurani. SVOD will grow at a faster pace going ahead and freemium
          will be the way to go for next 5 years, he says. At present, Netflix
          has no presence in the sports domain anywhere in the world.
          Considering that IPL has had a large hand in Disney+Hotstars success
          in India, can Netflix afford to ignore this area, especially given the
          love for cricket that Indians have?
        </div>
      </div>
    </>
  );
};

export default OurNewsletter;

/* */
