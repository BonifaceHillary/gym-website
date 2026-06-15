import React from "react";

import image4 from "../../assets/images/image4.jpg"; 

const Contact = () => {
  return (
    <section className="w-full py-16">

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>


      <div
        className="relative w-full h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image4})` }}
      >
      
        <div className="absolute inset-0 bg-black/60"></div>

        
        <div className="relative w-full max-w-6xl px-10 grid grid-cols-2 gap-10 items-center text-white">
          
          
          <div>
            <p className="text-sm uppercase tracking-widest mb-3">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold leading-tight mb-8">
              Get In Touch : We Are Here To Answer Your Questions
            </h1>

          
            <div className="flex gap-4 mb-8">
              
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-md">
                <span className="text-xl">📧</span>
                <span className="text-sm">Support@heavylift.com</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-md">
                <span className="text-xl">📞</span>
                <span className="text-sm">+91 343454332</span>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Customer Support</h3>
                <p className="text-white/80">
                  Our support team is available all around the clock to help you
                  with any issue.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Feedbacks & Suggestions
                </h3>
                <p className="text-white/80">
                  We value your feedback and are here to make things better.
                </p>
              </div>
            </div>
          </div>

          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-2">
              Get In Touch
            </h2>
            <p className="text-sm text-white/70 mb-6">
              You can reach us anytime
            </p>

            
            <form className="flex flex-col gap-4">
              
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 rounded-full bg-transparent border border-white/40 text-white placeholder-white/60 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 rounded-full bg-transparent border border-white/40 text-white placeholder-white/60 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-full bg-transparent border border-white/40 text-white placeholder-white/60 outline-none"
              />

              <input
                type="text"
                placeholder="Phone no"
                className="p-3 rounded-full bg-transparent border border-white/40 text-white placeholder-white/60 outline-none"
              />

              <textarea
                placeholder="Your message"
                rows="4"
                className="p-3 rounded-2xl bg-transparent border border-white/40 text-white placeholder-white/60 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-full font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;