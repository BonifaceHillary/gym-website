
import React from "react";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const Program = () => {
  const programs = [image1, image2, image3, image1, image2, image3];

  return (
    <section className="px-20 py-16">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Training Program
      </h2>

      
      <div className="flex gap-6 overflow-x-auto pb-4">
        {programs.map((image, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden w-[200px] flex-shrink-0"
          >
             <img
              src={image}
              alt=""
              className="w-full h-[300px] object-cover"
            /> 

            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex gap-2 text-xs uppercase font-medium">
                <span>PRO</span>
                <span>12 WEEKS</span>
              </div>

              <div className="mt-1 flex flex-col text-xs uppercase">
                <span>RECOVERY</span>
                <span>YOGA & STRENGTH</span>
              </div>

              <button className="mt-3 bg-blue-600 px-4 py-2 rounded-full text-xs">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
