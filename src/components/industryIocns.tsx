"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const IndustryIocns = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images: string[] = [
    "/icons/industry/industry-image-1.png",
    "/icons/industry/industry-image-2.png",
    "/icons/industry/industry-image-3.png",
    "/icons/industry/industry-image-4.png",
    "/icons/industry/industry-image-5.png",
    "/icons/industry/industry-image-6.png",
    "/icons/industry/industry-image-7.png",
    "/icons/industry/industry-image-8.png",
    "/icons/industry/industry-image-9.png",
    "/icons/industry/industry-image-10.png",
    "/icons/industry/industry-image-11.png",
    "/icons/industry/industry-image-12.png",
    "/icons/industry/industry-image-13.svg",
    "/icons/industry/industry-image-14.png",
    "/icons/industry/industry-image-15.png",
  ];

  return (
    <div className="md:pt-16">
      <section className="md:hidden w-full bg-white py-16">
        <Carousel
          plugins={plugin.current ? [plugin.current] : []}
          className="w-full overflow-hidden"
          onMouseEnter={() => plugin.current?.stop?.()}
          onMouseLeave={() => plugin.current?.reset?.()}
        >
          <CarouselContent>
            {images?.map((img, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="p-2">
                  <div className="shadow-none">
                    <div className="flex justify-center items-center">
                      <Image
                        src={img}
                        alt={`industry-icon ${index}`}
                        height={100}
                        width={100}
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 p-4 xl:px-40">
        {images?.map((img, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <Image
              src={img}
              alt={`industry-icon ${index}`}
              height={100}
              width={100}
              className="w-auto h-auto object-contain"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndustryIocns;
