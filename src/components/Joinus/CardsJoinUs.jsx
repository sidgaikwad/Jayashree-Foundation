import React from "react";
import Logo from "../../assets/logo.jpg";

const CardsJoinus = () => {
  return (
    <section className="border-b-4 border-black ">
      <h1 className="font-bold text-6xl text-center text-black my-5">
        Our Focus Areas
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 mx-5 py-16">
        <div className="card w-96 bg-white shadow-2xl  hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Logo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-4xl">
              Education
            </h2>
            <p className="text-black text-center text-lg font-thin">
              Holistic education and quality skill development of rural masses &
              women .
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Logo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-4xl">
              Health
            </h2>
            <p className="text-black text-center text-lg font-thin">
            Awareness & Guidance on Menstrual Health and Puberty amongst the masses
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl hover:scale-105 hover:transition-all h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Logo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-4xl">
            Empowerment
            </h2>
            <p className="text-black text-center text-lg font-thin">
            Mentoring , Guiding and creating the enterpreneurial  and self reliance mindset and earning a decent livelihood
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsJoinus;
