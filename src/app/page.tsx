import FeatureSction from "@/components/Home/FutureSction";
import HeroSection from "@/components/Home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSction />
      <div className="bg-black h-screen"></div>
    </div>
  );
};

export default Home;
