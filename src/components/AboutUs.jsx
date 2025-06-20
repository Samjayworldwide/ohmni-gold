import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="bg-black p-8 rounded-2xl mb-10">
        <div className="max-w-7xl mx-auto grid gap-y-[8rem] gap-x-[4rem] md:grid-cols-2 items-center">
          <div className="flex flex-col items-center">
            <div className="bg-white border border-transparent rounded-xl p-2 w-fit">
              <p className="text-2xl text-black">About us</p>
            </div>
            <div className="text-[#f3f3ec] mt-5 w-full text-center">
              <div className="flex flex-col items-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-snug">
                <p>All About</p>
                <p>Ohmni Gold Logistika Ltd</p>
              </div>
            </div>
          </div>

          <div className="text-[#f3f3ec] w-full">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-centre text-justify max-w-prose">
              At Ohmni Gold Logistika, we are a diversified enterprise committed
              to shaping the future through innovative solutions in Real Estate,
              Commerce, Oil & Gas, and Infrastructure Development. With a track
              record of excellence and a team of seasoned professionals, we
              deliver projects that drive economic growth, improve communities,
              and create sustainable value. Our real estate arm develops
              residential and commercial properties that blend modern design
              with lasting functionality. In the energy sector, we provide
              reliable oil and gas services with a focus on safety and
              efficiency. Through our infrastructure initiatives, we build
              essential systems—from roads to utilities—that support long-term
              development. In commerce, we drive regional trade and business
              growth by facilitating the movement, distribution, and exchange of
              high-demand goods across strategic markets. From wholesale supply
              to retail partnerships, we leverage logistics, technology, and
              market insight to deliver products efficiently and reliably. Our
              commercial operations are designed to empower local businesses,
              support entrepreneurs, and foster a more connected economy. Guided
              by integrity, innovation, and impact, we are not just building
              structures—we’re building futures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
