import React from 'react'

const Cards =() => {
  return (
    <div className="flex w-full mb-10 flex-wrap gap-4 lg:gap-0  border-b-black border-b-4">
        <div className="grid flex-grow  bg-blue-300  place-items-center  border-r-black border-r-4 ">
       <a href="" className="text-2xl text-black font-bold hover:scale-125 hover:transition-all mt-10 hover:underline">Our Mission</a>
          <p className=" text-black py-5 mb-5">Our Goal, Vision & Commitment</p>
        </div>
        <div className="grid flex-grow  bg-blue-600  place-items-center  border-r-black border-r-4 ">
        <a href="" className="text-2xl text-black font-bold hover:scale-125 hover:transition-all mt-10 hover:underline">Our Projects</a>
          <p className="py-5 text-black mb-5">Register & Help Make Change</p>
        </div>
        <div className="grid flex-grow  bg-[#0C193C]  place-items-center   ">
       <a href="" className="text-2xl text-black font-bold hover:scale-125 hover:transition-all mt-10 hover:underline">Get Involved</a>
          <p className="py-5 text-black mb-5">Volunteer, Participate, or Donate</p>
        </div>
      </div>
  );
}

export default Cards;