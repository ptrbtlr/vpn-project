import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9A] uppercase font-bold p-2">
          Get more than just a VPN
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Block malware, trackers, and intrusive ads with FREE Threat Protection
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast & Flexible for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["iOS", "Android", "MacOS", `Windows`]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
