import FeatureSction from "@/components/Home/FutureSction";
import HeroSection from "@/components/Home/HeroSection";
import PhilocofhySection from "@/components/Home/philocofhySection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSction />
      <PhilocofhySection />
      <div className="bg-black h-screen"></div>
    </div>
  );
};

export default Home;
