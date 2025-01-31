import Image from "next/image";
import LargeDeviceHeader from "@/components/LargeDeviceHeader";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="lg:h-[95vh] h-full bg-gradient-to-r from-[#1a7ae9] via-[#1373e0] to-[#005ec8] lg:bg-none relative">
      <div className="hidden lg:block px-8 xl:px-48 lg:px-12 z-50">
        <LargeDeviceHeader />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/backgrounds/WaveLinesMobile1.svg"
          alt="Hero Image"
          fill
          className="w-full h-full absolute top-0 left-0 bottom-0 z-10"
        />
        <Image
          src="/images/homeImage.jpg"
          alt="Hero Image"
          height={500}
          width={500}
          className="w-2/3 h-full absolute top-0 right-0 bottom-0"
        />
        <Image
          src="/images/heroBottom.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="absolute right-0 left-0 bottom-0 z-10 w-full"
        />
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
        <Image
          src="/images/sub-top.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="absolute right-0 left-0 top-0 z-10 w-full"
        />
        <Image
          src="/images/heroBottom.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="absolute right-0 left-0 bottom-0 z-10 w-full"
        />
        <Image
          src="/images/homeImage.jpg"
          alt="Hero Image"
          height={500}
          width={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
