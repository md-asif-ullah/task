import FeatureComponentImageSection from "../FutureComponentImageSection";

const FeatureSction = () => {
  return (
    <div className="bg-white pb-20 md:pt-10 w-full min-h-screen h-full px-5">
      <section className="md:grid grid-cols-2 xl:px-40">
        <div className="pt-20 md:ml-5">
          <section className="space-y-4">
            <h4 className="text-[#2382f0] font-semibold text-sm mr-20 lg:text-lg lg:tracking-widest">
              POWERING THE FUTURE OF FINANCE
            </h4>
            <h2 className="text-[#0b305b] text-3xl font-semibold mr-10 md:text-3xl lg:text-7xl lg:font-semibold xl:text-6xl">
              Uncovering new ways to delight customers
            </h2>
          </section>

          <section className="md:space-y-7 lg:space-y-5">
            <div className="md:hidden">
              <FeatureComponentImageSection />
            </div>

            <p className="text-[#244e7f] font-bold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-[#54759b]">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </section>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <FeatureComponentImageSection />
        </div>
      </section>
    </div>
  );
};

export default FeatureSction;
