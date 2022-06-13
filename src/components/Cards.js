import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <h1 className="md:text-4xl text-2xl font-bold text-center py-4">
        Choose Your VPN Max Plan
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* ONE */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center">1-Year Plan</h2>
          <p className="text-center text-4xl font-bold">$4.99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">per month</p>
            <p className="py-2 border-b mx-8 cursor-pointer">Save 39%</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00DF9A] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3">
              Get One Year Plan
            </button>
          </div>
        </div>

        {/* TWO */}

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center">2-Year Plan</h2>
          <p className="text-center text-4xl font-bold">$3.29</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">per month</p>
            <p className="py-2 border-b mx-8 cursor-pointer">Save 60%</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-[#00DF9A] rounded-md font-medium w-[200px] my-6 px-6 py-3">
              Get Two Year Plan
            </button>
          </div>
        </div>

        {/* THREE */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center">1-Month Plan</h2>
          <p className="text-center text-4xl font-bold">$11.99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">per month</p>
            <p className="py-2 border-b mx-8 cursor-pointer text-red-700">
              Save 0%
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00DF9A] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3">
              Get One Month Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
