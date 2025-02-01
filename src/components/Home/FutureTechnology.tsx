"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import ComponentTitle from "../componentTitle";
import Image from "next/image";

interface CarouselContentTyle {
  title: string;
  subTitle: string;
  imageSrc: string;
  desc: string;
  subDesc: string;
}

export function FutureTechnology() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const ButtonTitles: string[] = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  const carouselContent: CarouselContentTyle[] = [
    {
      title: "Customer focused",
      subTitle: "Purpose-built financial services",
      imageSrc: "/images/futureTechnology/futureTechnology-1.jpg",
      desc: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      subDesc:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    },
    {
      title: "Agile and adaptable",
      subTitle: "Agile and adaptable for growth",
      imageSrc: "/images/futureTechnology/futureTechnology-2.jpg",

      desc: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      subDesc:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    },
    {
      title: "Compliance ready",
      subTitle: "Manage compliance with ease",
      imageSrc: "/images/futureTechnology/futureTechnology-3.png",

      desc: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      subDesc:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    },
    {
      title: "Secure and safe",
      subTitle: "Highly secure and safe",
      imageSrc: "/images/futureTechnology/futureTechnology-4.jpg",

      desc: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      subDesc:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <ComponentTitle
        title="TECHNOLOGY BUILT FOR YOU"
        subTitle="The future of finance"
      />
      <section className="flex flex-col items-center w-full">
        <div className="hidden lg:flex gap-4 p-6">
          {ButtonTitles.map((title, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`text-[#2181f0] text-lg font-semibold , ${
                current === index
                  ? "bg-[#b9d9ff] w-52 h-12 rounded-full hover:bg-[#b9d9ff]"
                  : "bg-white shadow-none hover:bg-slate-50 w-52 h-12 rounded-full"
              }`}
            >
              {title}
            </Button>
          ))}
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-3xl lg:max-w-6xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
        >
          <CarouselContent>
            {carouselContent.map((content, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="p-4 mt-10">
                  <Card className="shadow-sm rounded-lg">
                    <CardContent className="flex flex-col p-6 xl:p-14 space-y-4 h-[830px] md:h-[880px] lg:h-[520px]">
                      <div className="lg:grid lg:grid-cols-2 gap-4 items-center">
                        <div className="md:space-y-10">
                          <ComponentTitle
                            title={content.title}
                            subTitle={content.subTitle}
                            containerStyle="text-start"
                            subTitleStyle="text-2xl font-semibold md:text-3xl lg:text-4xl lg:font-semibold xl:text-5xl"
                          />
                          <div className="hidden md:flex flex-col mt-10 md:space-y-10">
                            <p className="text-lg font-semibold text-[#1f4a7c]">
                              {content.desc}
                            </p>
                            <p className="text-[#325987]">{content.subDesc}</p>
                          </div>
                        </div>
                        <Image
                          src={content.imageSrc}
                          alt={`carousel-image-${index}`}
                          width={400}
                          height={300}
                          className="rounded-lg object-cover w-full md:mt-10 mt-5 lg:mt-0 lg:h-full md:h-[500px]"
                        />
                      </div>
                      <div className="md:hidden flex flex-col mt-5 space-y-5">
                        <p className="text-lg font-semibold text-[#1f4a7c]">
                          {content.desc}
                        </p>
                        <p className="text-[#325987]">{content.subDesc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center space-x-2 mt-6">
          {carouselContent.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                current === index ? "bg-blue-500" : "bg-blue-300"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
