import React from "react";
import ComponentTitle from "../componentTitle";
import AnimatedNumberCounter from "../animatedNumberCounte";
import IndustryIocns from "../industryIocns";

const TrustedSection = () => {
  return (
    <div className="w-full h-full py-28 bg-white">
      <ComponentTitle title="TRUSTED BY THE BEST" />
      <AnimatedNumberCounter />
      <div className="mt-10">
        <IndustryIocns />
      </div>
    </div>
  );
};

export default TrustedSection;
