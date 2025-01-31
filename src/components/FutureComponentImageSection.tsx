import Image from "next/image";

const FeatureComponentImageSection = () => {
  return (
    <div className="py-10 relative lg:h-[500px] lg:w-[500px]">
      <div className="p-7 relative z-20 mt-3">
        <Image
          src="/images/reature.png"
          width={300}
          height={500}
          alt="feature image"
          style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
          className="xl:h-full w-full"
        />
      </div>

      <Image
        src="icons/feature/background.svg"
        width={47}
        height={47}
        alt="feature icon"
        className="absolute top-10 left-0 right-0 w-full z-10"
      />

      <Image
        src="icons/feature/icon-1.svg"
        width={100}
        height={100}
        alt="feature icon"
        className="absolute top-1/4 -right-2 z-30 h-1/5 w-1/5 md:w-auto md:h-auto"
      />
      <Image
        src="/icons/feature/icon-2.svg"
        width={30}
        height={30}
        alt="feature icon"
        className="absolute top-1/4 left-1 z-30 h-1/6 w-1/5"
      />
      <Image
        src="/icons/feature/icon-3.svg"
        width={47}
        height={47}
        alt="feature icon"
        className="absolute top-[40%] left-14 z-30 h-1/6 w-1/5"
      />
    </div>
  );
};

export default FeatureComponentImageSection;
