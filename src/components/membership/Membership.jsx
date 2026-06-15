

import React from "react";

import image1 from "../../assets/images/image1.jpg";

import image2 from "../../assets/images/image2.jpg";

const Membership = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
    
      <h2 className="text-5xl font-bold text-center mb-14">
        Membership Training Programs
      </h2>

    
      <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-6">
        
      
        <div className="bg-blue-500 text-white rounded-[25px] p-10 relative min-h-[420px] flex flex-col justify-between">
          
          <div>
            <h3 className="text-5xl font-bold mb-4">
              Elite Performance Program
            </h3>

            <p className="text-xl font-medium mb-8">
              For Novice And Amateur
            </p>

            <p className="max-w-md leading-relaxed text-white/90">
              Personalized Coaching, Nutrition Guidance And
              Advanced Strength Systems Tailored For Serious
              Athletes And It Takes Few Weeks To Get
              Your Goal You Want.
            </p>
          </div>

          <button className="self-end bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-medium">
            Join Now
            <span>➜</span>
          </button>
        </div>


        <div className="relative rounded-[25px] overflow-hidden min-h-[420px]">
          <img
            src={image1}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/10">
            <h3 className="text-2xl font-semibold mb-2">
              Private Access Membership
            </h3>

            <p className="text-sm mb-5">
              Exclusive Access. Limited Slot
            </p>

            <button className="bg-blue-500 px-5 py-3 rounded-full w-fit flex items-center gap-2">
              Start Training
              <span>➜</span>
            </button>
          </div>
        </div>

        
        <div className="relative rounded-[25px] overflow-hidden min-h-[420px]">
          <img
            src={image2}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/30">
            <h3 className="text-4xl font-bold mb-5 leading-tight">
              Unlock Your
              <br />
              Inner
              <br />
              Strength
            </h3>

            <button className="bg-white text-blue-500 px-5 py-3 rounded-full w-fit flex items-center gap-2 font-medium">
              Learn More
              <span>➜</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Membership;