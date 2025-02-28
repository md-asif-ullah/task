"use client";

import Image from "next/image";
import ComponentTitle from "../componentTitle";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Features {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const features: Features[] = [
  {
    icon: "/images/philocofhy/philocofhy-icon-3.svg",
    alt: "philocofhy 1",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "/images/philocofhy/philocofhy-icon-1.png",
    alt: "philocofhy 1",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "/images/philocofhy/philocofhy-icon-2.svg",
    alt: "philocofhy 1",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
];

const PhilocofhySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(".feature-item", {
              opacity: 0,
              y: 50,
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <div className="min-h-screen h-full bg-white pt-36 pb-20 px-5 lg:px-10 xl:px-48">
      <div>
        <ComponentTitle
          title="OUR PHILOSOPHY"
          subTitle="Human-centred innovation"
        />
      </div>

      {/* big screen size image */}
      <div className=" hidden md:block mt-10">
        <Image
          src="/images/philocofhy/philocofhy-1.png"
          alt="philocofhy 2"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      {/* small screen size image */}
      <div className="mt-5 py-5 md:hidden">
        <Image
          src="/images/philocofhy/philocofhy-2.png"
          alt="philocofhy 1"
          width={1000}
          height={1000}
        />
      </div>

      <section
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 xl:gap-24 mt-10 mx-7"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item flex flex-col items-start space-y-7"
          >
            <div>
              <Image
                src={feature.icon}
                alt={feature.alt}
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
            <h3 className="text-[#0d427c] text-2xl font-semibold">
              {feature.title}
            </h3>
            <p className="text-[#485e96] text-lg">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PhilocofhySection;
