import React from "react";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import TreePlantation from '../../Images/Home/LatestUpdates/TreePlantation.jpg'
import MaskDonation from '../../Images/Home/LatestUpdates/MaskDistribution.png'
import SponseredEducation from '../../Images/Home/LatestUpdates/SponseredEducation.jpg'


const LatestUpdate = () => {
  return (
    <section className="border-b-4 border-black ">
      <h1 className="font-bold text-6xl text-center text-black my-5">
        Latest Updates
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 mx-5 py-10">
        <div className="card w-96 bg-white shadow-2xl  hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={TreePlantation} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-xl lg:text-4xl">
            TreePlantation
            </h2>
            <p className="text-black text-center text-lg font-thin">
            We conducted Tree plantation because tree plantation is very necessary to counter Global warming And trees provide oxygen to the environment and make the air quality better.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                <Link to={'/blog'}>Read More </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={MaskDonation} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-4xl">
              Mask Donation
            </h2>
            <p className="text-black text-center text-lg font-thin">
            We distributed masks to the poor people In Order to stop the spread of covid-19.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                <Link>Read More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={SponseredEducation} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-xl lg:text-4xl">
              Sponsered Education
            </h2>
            <p className="text-black text-center text-lg font-thin">
            We sponsored the education of students who were unable to pay their school fees.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
                <Link>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
      <button className="btn btn-primary bg-blue-900  text-black border-none  hover:scale-110 hover:underline px-24">
        <Link className="text-white font-bold ">Read More</Link>
      </button>
      </div>
    </section>
  );
};

export default LatestUpdate;
