import React from 'react';

const Lifestyle = () => {
  const images = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',

    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',

    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
    
    'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f',
  ];

  return (
    <section className="max-w-6xl mx-auto px-0 py-4 border-4 border-red-500">
      <h2 className="text-center text-5xl font-bold text-gray-700 mb-12">
        The Elite Lifestyle
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4">
        
        <div className="w-64 h-96 overflow-hidden rounded-3xl">
          <img
            src={images[0]}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Tilted Left */}
        <div className="w-64 h-96 overflow-hidden rounded-3xl rotate-[-10deg]">
          <img
            src={images[1]}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="w-64 h-96 overflow-hidden rounded-3xl rotate-[8deg]">
          <img
            src={images[2]}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="w-64 h-96 overflow-hidden rounded-3xl">
          <img
            src={images[3]}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;