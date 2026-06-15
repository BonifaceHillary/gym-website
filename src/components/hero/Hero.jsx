import image1 from "../../assets/images/image1.jpg"

import image2 from "../../assets/images/image2.jpg"

import image3 from "../../assets/images/image3.jpg"

import image4 from "../../assets/images/image4.jpg"



const Hero = () => {
  return (

<section className="px-20 py-16">
  
  <h1 className="text-4xl font-bold text-absolute left-17 max-w-3xl mx-auto leading-tight mb-12">
    A Private Fitness Experience Designed For Those Who Demand More.
  </h1>

  

  <div className="grid grid-cols-3 gap-6 items-start">
    
    

    <img
      src={image1}
      alt=""
      className="w-full h-[500px] object-cover rounded-xl"
    />

    

    <div className="flex flex-col items-center gap-6">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
        Become A Member →
      </button>

      <button className="mt-4 border border-black px-8 py-3 rounded-full">
        Book a Private Tour
      </button>

      <img
        src={image3}
        alt=""
        className="w-full  h-[340px] rounded-xl"
      />
    </div>

    
    <div className="relative">
    <img
      src={image2}
      alt=""
      className="w-full h-[500px] object-cover rounded-xl"
      />


  
  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
  </div>

  
  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
    <div className="w-16 h-5 border-2 border-white rounded-full"></div>
    </div>
    
  </div>
 
  </div>

</section>

    
  );
};

export default Hero;