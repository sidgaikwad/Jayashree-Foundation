import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { SiWorldhealthorganization } from "react-icons/si";
import { PiBooksFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandsAslInterpreting } from "react-icons/fa6"
import { BsLaptop } from "react-icons/bs"
import { ImLocation2 } from "react-icons/im"

const Impact = () => {
  return (
    <section>
        <div className='flex items-center justify-center flex-wrap  my-5 border-b-4 border-black'>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <SiWorldhealthorganization/>
            </div>
            <h3>
              <p
                className="text-black hover:text-primary mb-4 flex justify-center items-center text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
              60,000
              </p>
            </h3>
            <p className="text-body-color text-black text-center">
            Volunteer Hours
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <BsFillPeopleFill/>
            </div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 flex justify-center items-center text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl text-black "
              >
              10,000
              </p>
            </h3>
            <p className="text-body-color text-black text-center ">
            Beneficiaries
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <PiBooksFill/>
            </div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 flex justify-center items-center  text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl  text-black"
              >
              8,000
              </p>
            </h3>
            <p className="text-body-color text-base text-center text-black">
            Books Distributed
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <FaHandsAslInterpreting/>
            </div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 flex justify-center items-center  text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl  text-black"
              >
              30+
              </p>
            </h3>
            <p className="text-body-color text-base text-center text-black">
            Events
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <BsLaptop/>
            </div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 flex justify-center items-center  text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl  text-black"
              >
              50
              </p>
            </h3>
            <p className="text-body-color text-base text-center text-black">
            E-Classes
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div>
          <div
            className="mb-4 flex justify-center items-center text-6xl text-black"
            >
            <ImLocation2/>
            </div>
            <h3>
              <p
                className="text-dark hover:text-primary mb-4 flex justify-center items-center  text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl  text-black"
              >
              6
              </p>
            </h3>
            <p className="text-body-color text-base text-center text-black">
            States
            </p>
            <ProgressBar 
            className='py-3'
            completed={100}
            animateOnRender={true}
            />
          </div>
        </div>
      </div>
      
      </div>
    </section>
  )
}

export default Impact