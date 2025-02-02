"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const AnimatedNumberCounter = () => {
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-3 md:gap-16 mt-12 px-5 md:px-10 xl:px-64">
      {/* Card 1 */}
      <article className="flex justify-between lg:flex-col lg:space-y-3 items-center lg:space-x-0 space-x-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/CarouselChevronRight.svg"
            alt="arrow-icon"
            width={30}
            height={30}
          />
          <h2 className="text-[#1877e5] text-6xl md:text-8xl font-extrabold ">
            <CountUp start={0} end={20} duration={3} />
          </h2>
        </div>
        <p className="text-base xl:text-xl text-black font-bold text-center lg:font-normal">
          Years of Experience
        </p>
      </article>

      {/* Card 2 */}
      <article className="flex justify-between lg:flex-col lg:space-y-3 items-center lg:space-x-0 space-x-4">
        <h2 className="text-[#1877e5] text-6xl md:text-8xl font-extrabold ">
          <CountUp start={0} end={40} duration={3} />+
        </h2>
        <p className="text-base xl:text-xl text-black font-bold text-center lg:font-normal">
          Financial Institutions
        </p>
      </article>

      {/* Card 3 */}
      <article className="flex justify-between lg:flex-col lg:space-y-3 items-center lg:space-x-0 space-x-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/CarouselChevronRight.svg"
            alt="arrow-icon"
            width={30}
            height={30}
          />
          <h2 className="text-[#1877e5] text-6xl md:text-8xl font-extrabold ">
            <CountUp start={0} end={200} duration={3} />m
          </h2>
        </div>
        <p className="text-base xl:text-xl text-black font-bold text-center lg:font-normal">
          Customers Each
        </p>
      </article>
    </section>
  );
};

export default AnimatedNumberCounter;
