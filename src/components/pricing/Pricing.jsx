
import React from "react";
import image4 from "../../assets/images/image4.jpg";

const Pricing = () => {
  return (
    <section className="px-20 py-16">
      <div className="relative">
        
        <div className="bg-[#E8F0FF] rounded-3xl p-10 h-[220px] flex justify-between">
          <div>
            <h2 className="text-4xl font-bold uppercase leading-tight max-w-xl mb-8">
              Elevate Your Strength
              <br />
              Train With Elite Precision
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-gray-600 text-lg leading-relaxed">
              A private training experience built for discipline,
              performance and excellence with premium equipment and
              expert coaching.
            </p>
          </div>
        </div>

        
        <div className="relative -mt-8 flex justify-center">
          <img
            src={image4}
            alt="Pricing"
            className="w-[80%] h-[450px] object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;