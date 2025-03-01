"use client";

import Image from "next/image";
import LargeDeviceHeader from "@/components/LargeDeviceHeader";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ImageDataType = {
  src: string;
  alt: string;
  height: number;
  width: number;
  className: string;
};

type smallScreenImagesType = {
  src: string;
  alt: string;
  height: number;
  width: number;
  className: string;
};

const largeScreenImages: ImageDataType[] = [
  {
    src: "/images/hero-sectionGradient-image.png",
    alt: "Hero Image",
    height: 500,
    width: 700,
    className:
      "xl:w-[85%] h-full hidden xl:block absolute top-0 left-0 right-0 bottom-0 z-10",
  },
  {
    src: "/images/hero-sectionGradient-image2.png",
    alt: "Hero Image",
    height: 500,
    width: 1000,
    className:
      "w-[80%] h-full hidden lg:block xl:hidden absolute top-0 left-0 right-0 bottom-0 z-10",
  },
  {
    src: "/images/heroCornarImage.png",
    alt: "Hero Image",
    height: 50,
    width: 50,
    className: "w-auto h-auto xl:w-48 xl:h-48 absolute bottom-4 right-0 z-10",
  },
  {
    src: "/images/homeImage.jpg",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className:
      "w-2/3 h-full absolute top-0 hidden xl:block right-0 bottom-0 img",
  },
  {
    src: "/images/homeImage2.jpg",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className:
      "w-2/3 h-full absolute top-0 hidden lg:block xl:hidden right-0 bottom-0",
  },
  {
    src: "/images/heroBottom.png",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className: "absolute right-0 left-0 bottom-0 z-10 w-full",
  },
];

const smallScreenImages: smallScreenImagesType[] = [
  {
    src: "/images/sub-top.png",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className: "absolute right-0 left-0 top-0 z-10 w-full",
  },
  {
    src: "/images/heroBottom.png",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className: "absolute right-0 left-0 bottom-0 z-10 w-full",
  },
  {
    src: "/images/homeImage.jpg",
    alt: "Hero Image",
    height: 500,
    width: 500,
    className: "w-full",
  },
];

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".img", {
      x: 100,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <div className="xl:h-[85vh] lg:h-[600px] h-full bg-gradient-to-r from-[#1a7ae9] via-[#1373e0] to-[#005ec8] lg:bg-none relative">
      <div className="hidden lg:block absolute top-0 left-0 right-0 px-8 xl:px-48 lg:px-12 z-50">
        <LargeDeviceHeader />
      </div>

      <div className="hidden lg:block xl:px-48 lg:px-12">
        <div className="text-start   absolute z-50 xl:top-40 top-28">
          <h2 className="headtext font-semibold text-white xl:w-[750px] lg:w-[500px]">
            Embrace the future of finance
          </h2>
          <p className="font-semibold text-white w-[500px] mt-8">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>

          <Button
            text="Reach Out to Us"
            className="bg-[#fe8b53] border-[#fe8b53] hover:bg-[#fe8b53] hover:text-white mt-7"
          />
        </div>
        {largeScreenImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
            className={image.className}
          />
        ))}
      </div>

      {/* mobile design */}

      <section className="mx-7 pt-24 text-white space-y-6 lg:hidden">
        <h2 className="text-6xl font-semibold">
          Embrace the future of finance
        </h2>
        <p className="font-semibold">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>

        <Button
          className="w-full bg-[#fe8b53] border-[#fe8b53]"
          text="Reach Out to Us"
        />
      </section>

      <div className="relative mt-10 lg:hidden">
        {smallScreenImages.map((image: smallScreenImagesType, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
            className={image.className}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
