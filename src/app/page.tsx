import Footer from "@/components/Home/Footer";
import FeatureSction from "@/components/Home/FutureSction";
import { FutureTechnology } from "@/components/Home/FutureTechnology";
import HeroSection from "@/components/Home/HeroSection";
import PhilocofhySection from "@/components/Home/philocofhySection";
import TrustedSection from "@/components/Home/TrustedSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSction />
      <PhilocofhySection />
      <FutureTechnology />
      <TrustedSection />
      <Footer />
    </div>
  );
};

export default Home;
