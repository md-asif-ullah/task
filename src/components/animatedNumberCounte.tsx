"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const StatsSection: React.FC = () => {
  const counterRef1 = useRef<HTMLHeadingElement>(null);
  const counterRef2 = useRef<HTMLHeadingElement>(null);
  const counterRef3 = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Card 1
          const Cont1 = { val: 0 };
          gsap.to(Cont1, {
            duration: 3,
            val: 20,
            roundProps: "val",
            onUpdate: () => {
              if (counterRef1.current) {
                counterRef1.current.innerHTML = Cont1.val.toString();
              }
            },
          });

          // Card 2
          const Cont2 = { val: 0 };
          gsap.to(Cont2, {
            duration: 3,
            val: 40,
            roundProps: "val",
            onUpdate: () => {
              if (counterRef2.current) {
                counterRef2.current.innerHTML = Cont2.val.toString();
              }
            },
          });

          // Card 3
          const Cont3 = { val: 0 };
          gsap.to(Cont3, {
            duration: 3,
            val: 200,
            roundProps: "val",
            onUpdate: () => {
              if (counterRef3.current) {
                counterRef3.current.innerHTML = `${Cont3.val}m`;
              }
            },
          });
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-3 md:gap-16 mt-12 px-5 md:px-10 xl:px-64"
    >
      {/* Card 1 */}
      <article className="flex justify-between lg:flex-col lg:space-y-3 items-center lg:space-x-0 space-x-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/CarouselChevronRight.svg"
            alt="arrow-icon"
            width={30}
            height={30}
          />
          <h2
            ref={counterRef1}
            className="text-[#1877e5] text-6xl md:text-8xl font-extrabold"
          >
            0
          </h2>
        </div>
        <p className="text-base xl:text-xl text-black font-bold text-center lg:font-normal">
          Years of Experience
        </p>
      </article>

      {/* Card 2 */}
      <article className="flex justify-between lg:flex-col lg:space-y-3 items-center lg:space-x-0 space-x-4">
        <div className="flex items-center text-[#1877e5] text-6xl md:text-8xl font-extrabold">
          <h2 ref={counterRef2}>0</h2>
          <i>+</i>
        </div>
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
          <h2
            ref={counterRef3}
            className="text-[#1877e5] text-6xl md:text-8xl font-extrabold"
          >
            0
          </h2>
        </div>
        <p className="text-base xl:text-xl text-black font-bold text-center lg:font-normal">
          Customers Each
        </p>
      </article>
    </section>
  );
};

export default StatsSection;
