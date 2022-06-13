import React from "react";
import {
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <h1 className="w-full text-3xl font-bold text-[#00DF9A]">VPN MAX.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem qui
          sit officiis ab. Alias at excepturi non mollitia, asperiores
          recusandae in veniam animi facere?
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare
            className="cursor-pointer hover:scale-105 hover:text-[#00DF9A] duration-300"
            size={30}
          />
          <FaInstagram
            className="cursor-pointer hover:scale-105 hover:text-[#00DF9A] duration-300"
            size={30}
          />
          <FaTwitterSquare
            className="cursor-pointer hover:scale-105 hover:text-[#00DF9A] duration-300"
            size={30}
          />
          <FaGithubSquare
            className="cursor-pointer hover:scale-105 hover:text-[#00DF9A] duration-300"
            size={30}
          />
          <FaDribbbleSquare
            className="cursor-pointer hover:scale-105 hover:text-[#00DF9A] duration-300"
            size={30}
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {/* ONE */}
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        {/* TWO */}
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Status</li>
          </ul>
        </div>
        {/* THREE */}
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
            <li className="py-2 text-sm cursor-pointer">Press</li>
          </ul>
        </div>
        {/* FOUR */}
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Claim</li>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
            <li className="py-2 text-sm cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
