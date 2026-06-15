

import React from "react";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

import image5 from "../../assets/images/image1.jpg";
import image6 from "../../assets/images/image2.jpg";
import image7 from "../../assets/images/image3.jpg";

const Discipline = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      <div className="flex flex-col items-center gap-6 mb-12">
        
        <div className="flex items-center gap-8">
          <h2 className="text-5xl font-bold uppercase">
            Your Body
          </h2>

          <img
            src={image5}
            alt=""
            className="w-56 h-14 rounded-2xl object-cover"
          />
        </div>

        <div className="flex items-center gap-8">
          <img
            src={image6}
            alt=""
            className="w-56 h-14 rounded-2xl object-cover"
          />

          <h2 className="text-5xl font-bold uppercase">
            Your Discipline
          </h2>
        </div>

        <div className="flex items-center gap-8">
          <h2 className="text-5xl font-bold uppercase">
            Your Legacy
          </h2>

          <img
            src={image7}
            alt=""
            className="w-56 h-14 rounded-2xl object-cover"
          />
        </div>
      </div>


      <div className="grid grid-cols-2 gap-4">
        
        
        <div className="relative row-span-2 rounded-3xl overflow-hidden">
          <img
            src={image1}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-center py-4">
            <h3 className="text-3xl font-semibold">
              James Campbell
            </h3>
            <p className="text-sm">CEO</p>
          </div>
        </div>

        
        <div className="grid grid-rows-2 gap-4">
          
          
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={image2}
              alt=""
              className="w-full h-[250px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-center py-4">
              <h3 className="text-2xl font-semibold">
                Samuel Odafe
              </h3>
              <p className="text-sm">
                Recovery Coach
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={image3}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-center py-3">
                <h3 className="text-xl font-semibold">
                  John Jude
                </h3>

                <p className="text-xs">
                  Nutrition Expert
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={image4}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-center py-3">
                <h3 className="text-xl font-semibold">
                  Debby Faruq
                </h3>

                <p className="text-xs">
                  Yoga Expert
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Discipline;