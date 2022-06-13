import React from "react";

const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://s1.nordcdn.com/nordvpn/media/1.1496.0/images/homepage/hero-threat-protection-bubble-shield.svg"
          alt="information"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#00DF9A] uppercase font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Our newest feature protects you from ads, trackers, and malware
          </h1>
          <p className="">
            Take your cybersecurity to the next level with NordVPN’s Threat
            Protection feature. You don’t need to connect to a VPN server for it
            to work. Once you enable it in the settings, Threat Protection will
            always make your browsing safer, faster, and smoother without
            tracking your actions online. Don’t worry about downloading malware,
            dealing with trackers and intrusive ads, or visiting a malicious URL
            — Threat Protection will neutralize these cyber threats before they
            can do any real damage to your device or data.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00DF9A]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
